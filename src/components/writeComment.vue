<template>
	<div class="box">
		<i class="write-img"></i>
		<span @click="comment">写评论</span>
	</div>
</template>


<script>
	export default{
		name:'writeComment',
		data:function(){
			return {
				commentState:false
			}
		},
		methods:{
			comment:function(){
				//弹出评论输入面板,调出蒙板
				this.$store.dispatch('toggleWrite');
			}
		}
	}
</script>

<style scoped>
	.box{
		height: 0.6rem;
		width: 100%;
		border-radius: 1rem;
		background-color: #F1F3F5;
		color: #A5A5A5;
		line-height: 0.6rem;
		position: relative;
		margin-left: 0.2rem;
		text-align: center;
	}
	.write-img{
		background-image: url("../assets/12_write_comment.png");
		display: inline-block;
		width: 0.4rem;
		height: 0.4rem;
		background-size: 100%;
		background-repeat: no-repeat;
		position: absolute;
		top: 50%;
		margin-top: -0.2rem;
		left: 0.3rem;
	}
</style>