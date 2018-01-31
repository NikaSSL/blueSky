<template>
	<div class="outer-box">
		<div class="head-box">
			<img class="head-img" :src="item.icon"></img>
		</div>
		<div class="msg-box">
			<span class="name">{{item.name}}</span>
			<span class="time">json未定义时间</span>
			<p class="msg-content">{{item.content}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'msgItem',
		props:['item']
	}
</script>

<style scoped>
	.outer-box{
		width: 100%;
		border-bottom: 1px solid #E2E4E6;
		padding: 0.2rem 0.3rem;
	}
	.head-box{
		width: 0.64rem;
		margin-right: 0.3rem;
		float: left;
	}
	.head-img{
		width: 0.64rem;
		height: 0.64rem;
	}
	.mgs-box{
		width: 5.93rem;
	}
	.name{
		font-size: 0.28rem;
		color: #6F7379;
		text-align: right;
	}
	.time{
		display: inline-block;
		float: right;
		font-size: 0.22rem;
		color: #A5A5A5;
	}
	.msg-content{
		font-size: 0.22rem;
		color: #A2A4A6;	
		margin-top: 0.02rem;
	}
</style>
