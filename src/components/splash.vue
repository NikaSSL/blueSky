
<!-- 引导页面 -->

<template>
	<div v-if="loadingState" class="outer-box">

		<img v-if="!loadState" :src="pageSrc" class="load-img" @click="onload">

		<div v-else class="inner-box">
			<img src="../assets/54_img.png" class="onload-img">
			<span class="title-tip">蓝穹</span>
		</div>

	</div>
</template>

<script>
	export default{
		name:'splash',
		data(){
			return {
				pageList:[
				'../static/img/36_img.png',
				'../static/img/37_img.png',
				'../static/img/38_img.png'
				],
				pageSrc:'',
				loadState:false,
				loadingState:true
			}
		},
		watch:{
			loadState(val){
				setTimeout(()=>{
					this.$router.push('/newList');
					this.loadingState = false;
				},2000)
			}
		},
		methods:{
			load:function(){
				this.pageList.forEach((item,index)=>{
					var self = this;
					setTimeout(()=>{
						self.pageSrc = item;
					},0 + 2000 * index);
				});
			},
			onload:function(){
				if(this.pageSrc === this.pageList[this.pageList.length-1]){
					this.loadState = true;					
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
	.inner-box{
		padding-top: 3.87rem;
		text-align: center;
	}
	.onload-img{
		display: block;
		width: 3.6rem;
		margin: 0 auto;
		margin-bottom: 0.4rem;
	}
	.title-tip{
		font-size: 0.56rem;
		color: #008CFF;
		letter-spacing: 0.24rem;
	}
</style>