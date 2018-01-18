<template>
	<div class="box">
		<img v-if="imgSrc" src="imgSrc" class="icn">
		<i v-else class="default" class="icn"></i>
		<span class="msg">{{msg}}</span>
	</div>
</template>

<script>
	export default{
		name:'shareIcn',
		props:['imgSrc','msg']
	}
</script>

<style scoped>
	.icn{
		display: block;
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.default{
		background-color: #D7D7D7;
	}
	.box{
		text-align: center;
		color: #888888;
		font-size: 12px;
	}
</style>