
<!-- Me页面中相关配置-2 -->

<template>
	<div class="container box">
		<div class="row">
			<router-link class="black" to="/aboutBlueSky" @click.native="hideFooter">
				<div class="col-xs-4 col-xs-offset-2  modify-padding  row-height line-space">
					<span>关于</span>
				</div>
			</router-link>
			<div class="col-xs-6 line-space row-height">
				<i class="arrow"></i>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-4 col-xs-offset-2  modify-padding  row-height line-space">
				<span>赞过的</span>
			</div>
			<div class="col-xs-6 line-space row-height">
				<i class="arrow"></i>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-4 col-xs-offset-2  modify-padding  row-height line-space">
				<span>当前版本</span>
				<div class="new-info"></div>
			</div>
			<div class="col-xs-6 line-space row-height word-style">
				1.0
			</div>
		</div>		
	</div>
</template>

<script>
	export default{
		name:'meConfig2',
		methods:{
			hideFooter:function(){
				this.$store.dispatch('outIndex');
			}
		}
	}
</script>

<style scoped>
	.box{
		border-bottom: 0.4rem solid #F1F3F5;
		font-size: 0.28rem;
	}
	.line-space{
		border-bottom: 1px solid #F1F3F5; 
		padding-left: 0;
		padding-right: 0.3rem;
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
	.row-height{
		height: 0.9rem;
		line-height: 0.9rem;
	}
	.modify-padding{
		padding-left: 0;
	}
	.word-style{
		text-align: right;
		color: #A5A5A5;
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
	.black{
		color: #333333;
	}
</style>