<template>
	<div class="outer-box">
		<head-ban :headText="headText" :searchState="searchState" :backState="backState"></head-ban>
		<div class="content">
			<img src="../assets/57_no_wifi.png" class="pic">
			<span>加载失败</span>
			<div class="btn-box">
				<span>点击重新加载</span>			
			</div>			
		</div>
	</div>
</template>

<script>
	import HeadBan from '../components/indexHeader.vue'
	export default{
		name:'loadFaild',
		components:{
			HeadBan
		},
		data:function(){
			return {
				headText:'',
				searchState:false,
				backState:true
			}
		}
	}
</script>

<style scoped>
	.outer-box{
		text-align: center;
		font-size: 0.32rem;
		color: #A5A5A5;
		margin-top: 1.3rem
	}
	.content{
		width: 4rem;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
	}
	.pic{
		display: block;
		width: 3rem;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 2.88rem;
		margin-bottom: 0.2rem;
	}
	.btn-box{
		border: 1px solid #979797;
		border-radius: 1rem;
		width: 2.8rem;
		height: 0.8rem;
		left: 50%;
		transform: translateX(25%);
		text-align: center;
		margin-top: 0.6rem;
		line-height: 0.8rem;
	}
</style>