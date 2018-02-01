<template>
	<div class="outer-box">
		<div class="head-box">
			<img class="head-img" :src="item.icon"></img>
		</div>
		<div class="msg-box">
			<span class="name">{{item.name}}</span>
			<p class="msg-content">{{item.text}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'thumbUpItem',
		props:['item']
	}
</script>

<style scoped>
	.outer-box{
		width: 100%;
		border-bottom: 1px solid #E2E4E6;
		padding: 0.2rem 0.28rem 0.2rem 0.32rem;
	}
	.head-box{
		width: 0.54rem;
		margin-right: 0.14rem;
		float: left;
	}
	.head-img{
		width: 0.54rem;
		height: 0.54rem;
	}
	.mgs-box{
		width: 5.93rem;
	}
	.name{
		font-size: 0.26rem;
		color: #6F7379;
		text-align: right;
	}
	.msg-content{
		font-size: 0.32rem;
		color: #A2A4A6;	
		margin-top: 0.02rem;
		letter-spacing: 0.007rem;
		line-height: 0.5rem;
	}
</style>
