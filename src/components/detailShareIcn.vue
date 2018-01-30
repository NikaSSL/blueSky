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
		width: 0.8rem;
		height: 0.8rem;
		border-radius: 50%;
		margin-top: 0.4rem;
	}
	.default{
		background-color: #D7D7D7;
	}
	.box{
		text-align: center;
		color: #888888;
		font-size: 0.24rem;
	}
</style>