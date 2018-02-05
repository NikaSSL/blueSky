
<!-- Me页面中相关配置-1 -->

<template>
	<div :class="['container','box',darkState?'night-box':'day-box']">
		<div class="row">
			<router-link :class="[darkState?'night-word':'day-word']" to="/pushMsg">
				<div :class="['col-xs-4','col-xs-offset-2','modify-padding','row-height',darkState?'night-line':'day-line']">
					<span>消息通知</span>
					<div class="new-info"></div>
				</div>
				<div :class="['col-xs-6','row-height','modify-padding',darkState?'night-word':'day-line']">
					<i :class="['arrow',darkState?'night-arrow':'night-arrow']"></i>
				</div>
			</router-link>
		</div>
		<div class="row row-height">
			<div :class="['col-xs-4','col-xs-offset-2','modify-padding',darkState?'night-word':'day-word']">
				<span>夜间模式</span>
			</div>
			<div class="col-xs-6 row-height modify-padding">
				<i :class="['arrow',darkState?'night-arrow':'night-arrow']"></i>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"meConfig",
		computed:{
			darkState:function(){
				return this.$store.state.darkState;
			}
		}
	}
</script>

<style scoped>
	.box{
		width: 100%;
		font-size: 0.28rem;
	}
	.night-box{
		border-top: 0.1rem solid #2A2A30;
		border-bottom: 0.1rem solid #2A2A30;
	}
	.day-box{
		border-top: 0.1rem solid #F1F3F5;
		border-bottom: 0.1rem solid #F1F3F5;
	}
	.night-word{
		color: #A2A4A6;		
	}
	.row-height{
		height: 0.9rem;
		line-height: 0.9rem;
	}
	.modify-padding{
		padding-left: 0;
		padding-right: 0.3rem;
	}
	.day-word{
		color: #333333;
	}
	.night-line{
		border-bottom: 1px solid  #2A2A30; 	
	}
	.day-line{
		border-bottom: 1px solid #E2E4E6; 
	}
	.arrow{
		background-repeat: no-repeat;
		background-size: 100%;
		display: block;
		width: 0.32rem;
		height: 0.32rem;
		float: right;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		transform: rotate(180deg);
	}
	.day-arrow{
		background-image: url("../assets/48_dark_back.png");
	}
	.night-arrow{
		background-image: url("../assets/4_icon_back.png");
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