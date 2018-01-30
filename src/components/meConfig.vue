
<!-- Me页面中相关配置-1 -->

<template>
	<div class="container box">
		<div class="row">
			<div class="col-xs-4 col-xs-offset-2 line-space">
				<span>消息通知</span>
			</div>
			<div class="col-xs-6 line-space">
				<i class="arrow"></i>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-4 col-xs-offset-2 ">
				<span>夜间模式</span>
			</div>
			<div class="col-xs-6">
				<i class="arrow"></i>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"meConfig"
	}
</script>

<style scoped>
	.box{
		border-top: 0.1rem solid #F1F3F5;
		border-bottom: 0.1rem solid #F1F3F5;
		font-size: 0.28rem;
	}
	.line-space{
		border-bottom: 1px solid #F1F3F5; 
		padding-left: 0px;
		text-align: left;
	}
	.arrow{
		background-image: url("../assets/48_dark_back.png");
		background-repeat: no-repeat;
		background-size: 100%;
		display: block;
		width: 0.32rem;
		height: 0.32rem;
		float: right;
	}
</style>