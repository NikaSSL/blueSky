
<!-- Me页面中相关配置-1 -->

<template>
	<div class="container box">
		<div class="row">
			<router-link class="black" to="/pushMsg">
				<div class="col-xs-4 col-xs-offset-2 modify-padding  row-height line-space">
					<span>消息通知</span>
					<div class="new-info"></div>
				</div>
				<div class="col-xs-6 line-space row-height modify-padding">
					<i class="arrow"></i>
				</div>
			</router-link>
		</div>
		<div class="row row-height">
			<div class="col-xs-4 col-xs-offset-2 modify-padding">
				<span>夜间模式</span>
			</div>
			<div class="col-xs-6 row-height modify-padding">
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
		width: 100%;
		border-top: 0.1rem solid #F1F3F5;
		border-bottom: 0.1rem solid #F1F3F5;
		font-size: 0.28rem;
	}
	.row-height{
		height: 0.9rem;
		line-height: 0.9rem;
	}
	.modify-padding{
		padding-left: 0;
		padding-right: 0.3rem;
	}
	.black{
		color: #333333;
	}
	.line-space{
		border-bottom: 1px solid #E2E4E6;; 
	}
	.arrow{
		background-image: url("../assets/48_dark_back.png");
		background-repeat: no-repeat;
		background-size: 100%;
		display: block;
		width: 0.32rem;
		height: 0.32rem;
		float: right;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}	
	.new-info{
		display: inline-block;
		position: relative;
		top: -0.12rem;
		width: 0.1rem;
		height: 0.1rem;
		background-color: #FF0202;
		border-radius: 50%;
	}
</style>