
<!-- Me页面中相关配置-2 -->

<template>
	<div class="container box">
		<div class="row">
			<div class="col-xs-4 col-xs-offset-2 line-space">
				<span>关于</span>
			</div>
			<div class="col-xs-6 line-space">
				<i class="arrow"></i>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-4 col-xs-offset-2 line-space">
				<span>赞过的</span>
			</div>
			<div class="col-xs-6 line-space">
				<i class="arrow"></i>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-4 col-xs-offset-2 line-space">
				<span>当前版本</span>
			</div>
			<div class="col-xs-6 line-space">
				1.0
			</div>
		</div>		
	</div>
</template>

<style scoped>
	.box{
		border-bottom: 16px solid #F1F3F5;
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