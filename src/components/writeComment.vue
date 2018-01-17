<template>
	<div class="box">
		<i class="write-img"></i>
		<span>写评论</span>
	</div>
</template>


<script>
	export default{
		name:'writeComment'
	}
</script>

<style scoped>
	.box{
		height: 30px;
		width: 100%;
		border-radius: 25px;
		background-color: #F1F3F5;
		color: #A5A5A5;
		font-size: 14px;
		line-height: 30px;
		position: relative;
		margin-left: 10px;
		text-align: center;
	}
	.write-img{
		background-image: url("../assets/12_write_comment.png");
		display: inline-block;
		width: 20px;
		height: 20px;
		background-size: 100%;
		background-repeat: no-repeat;
		position: absolute;
		top: 50%;
		margin-top: -10px;
		left: 15px;
	}
</style>