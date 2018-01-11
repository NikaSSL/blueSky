
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
			<div class="col-xs-6">
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
		border-top: 5px solid #F1F3F5;
		border-bottom: 5px solid #F1F3F5;
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
		width: 20px;
		height: 20px;
		float: right;
	}
</style>