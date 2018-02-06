
<!-- Me页面中登录组件 -->

<template>
	<div :class="['login-box',darkState?'box-night':'box-day']">
		<img :class="['login',darkState?'login-night':'']" src="../assets/23_img_login2.png">
	</div>
</template>

<script>
	export default{
		name:"meLogin",
		computed:{
			darkState:function(){
				return this.$store.state.darkState;
			}	
		}
	}
</script>

<style scoped>
	.login-box{
		width: 100%;
		height: 4.1rem;
		text-align: center;        
		background-repeat: no-repeat;
        background-size: 100%;
	}
	.box-day{
		background-image: url("../assets/22_img_login.png");
	}
	.box-night{
		background-image: url("../assets/53_dark_bg.png");
	}
	.login{
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 50%;
		margin-top: 0.8rem;
	}
	.login-night{
		opacity: 0.5;
	}
</style>