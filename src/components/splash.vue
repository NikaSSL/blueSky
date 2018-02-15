
<!-- 引导页面 -->

<template>
	<div class="outer-box">
		<img :src="pageSrc" class="load-img">
	</div>
</template>

<script>
	export default{
		name:'splash',
		data(){
			return {
				pageList:[
				'../assets/36_img.png',
				'../assets/37_img.png',
				'../assets/38_img.png'
				],
				pageSrc:''
			}
		},
		methods:{
			load:function(){
				var i = 0;
				for (i in this.pageList) {
					// this.pageSrc = this.pageList[i]
					(function(){setTimeout('console.log(i)',2000)})(i);
				}
			}
		},	
		mounted(){
			this.load();
		}
	}
</script>

<style scoped>
	.outer-box{
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 9999;
	}
	.load-img{
		width: 100%;
	}
</style>