import Vue from 'vue'

export default(Vue,options = {})=>{
	var init = {
		defalut:'../static/img/2_img_load_fail.png'
	}

	var listenList = [];//需要监听的图片列表，待加载
	var imageCatcheList = [];//已加载过得图片缓存列表

	//移除操作
	Array.prototype.remove = function(item){
		this.forEach(function(index,value,array){
			if (value.ele === item.ele && value.src === item.src) {
				this.splice(index,1);
				return ;
			}
		})
	}

	//判断是否已加载过该图片
	const isAlreadyLoad = (imageSrc) =>{
		if (imageCatcheList.indexOf(imageSrc) > -1) {
			return true;
		}else{
			return false;
		}
	};

	//检测图片是否可加载，可以则加载
	const isCanshow = (item) =>{
		var ele = item.ele;
		var src = item.src;
		//图片距离页面顶部的距离
		var top = ele.getBoundingClientRect().top;
		var windowHeight = window.innerHeight;
		if (top + 10 < window.innerHeight) {
			var image = new Image();
			image.src = src;
			image.onload = function(){
				setTimeout(function(){
					console.log(ele.src)
					ele.src = src;
				},1000);
				// ele.src = src;
				imageCatcheList.push(src);
				listenList.remove(item);
			}
			return true;
		}else{
			return false;
		}
	};

	//添加监听事件
	const onListenScroll = () =>{
		window.addEventListener('scroll',function(){
			var length = listenList.length;
			for(let i = 0;i < length;i++){
				isCanshow(listenList[i]);
			}
		})
	};

	const addListener = (ele,binding) =>{
		var imageSrc = binding.value;
		if (isAlreadyLoad(imageSrc)) {//已加载过，则无需重新加载
			ele.src = imageSrc;
			return false;
		}else{
			ele.src = init.defalut;
		}

		var item = {
			ele:ele,
			src:imageSrc
		}

		if (isCanshow(item)) {
			return
		}else{
			listenList.push(item);
		}

		onListenScroll();

	}

	Vue.directive('lazyload',{
		inserted:addListener,
		updated:addListener
	})
}
