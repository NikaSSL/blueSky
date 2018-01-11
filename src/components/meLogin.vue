
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
		height: 205px;
		background-image: url("../assets/22_img_login.png");
		text-align: center;        
		background-repeat: no-repeat;
        background-size: 100%;
	}
	.login{
		width: 60px;
		height: 60px;
		border-radius: 50%;
		margin-top: 30px;
	}
</style>