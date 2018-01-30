
<!-- Me页面中登录组件 -->

<template>
	<div class="login-box">
		<img class="login" src="../assets/23_img_login2.png">
	</div>
</template>

<script>
	export default{
		name:"meLogin",
		data(){
			return{}
		}
	}
</script>

<style scoped>
	.login-box{
		width: 100%;
		height: 4.1rem;
		background-image: url("../assets/22_img_login.png");
		text-align: center;        
		background-repeat: no-repeat;
        background-size: 100%;
	}
	.login{
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 50%;
		margin-top: 0.8rem;
	}
</style>