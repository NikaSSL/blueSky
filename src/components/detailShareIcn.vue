<template>
	<div class="box">
		<img v-if="imgSrc" v-bind:src="imgSrc" class="icn">
		<i v-else class="default icn"></i>
		<span>{{msg}}</span>
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
		position: relative;
		margin:0 auto;		
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-top: 20px;
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