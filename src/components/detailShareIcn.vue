<template>
	<div :class="['box',darkState?'night-box':'day-box']">
		<img v-if="imgSrc1" v-bind:src="darkState?imgSrc2:imgSrc1" class="icn">
		<i v-else :class="['icn',darkState?'night-default':'day-default']"></i>
		<span>{{msg}}</span>
	</div>
</template>

<script>
	export default{
		name:'shareIcn',
		props:['imgSrc1','imgSrc2','msg'],
		computed:{
			darkState:function(){
				return this.$store.state.darkState;
			}
		}
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
	.day-default{
		background-color: #D7D7D7;
	}
	.night-default{
		background-color: #39393E;
	}
	.box{
		text-align: center;
		font-size: 0.24rem;
	}
	.day-box{
		color: #888888;
	}
	.night-box{
		color: #6F7379;
	}
</style>