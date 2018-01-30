<template>
	<div class="write-panel">
		<textarea class="write-area" placeholder="写评论" autofocus="autofocus"></textarea>
		<span class="send" @click="send">发送</span>
	</div>
</template>

<script>
	export default{
		name:'writePanel',
		methods:{
			send:function(){
				this.$store.dispatch('toggleWrite');
				//判断输入内容是否为空，不为空则将输入内容添加到评论数据中
				//...
			}
		}
	}	
</script>

<style scoped>
	.write-panel{
		z-index: 999;
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: #FFFFFF;
		width: 7.5rem;
		height: 2.7rem;
		font-size: 0.32rem;
		color:  #A5A5A5;
	}
	.write-area{
		display: block;
		width: 6.9rem;
		height: 1.2rem;
		margin: 0 auto;
		margin-top: 0.3rem;
		margin-bottom: 0.3rem;
		background-color:  #F1F3F5;
	}
	.send{
		display: block;
		width: 6.9rem;
		height: 0.74rem;
		color: #A5A5A5;
		border: 1px solid #A5A5A5;
		border-radius: 0.04rem;
		margin: 0 auto;
		text-align: center;
		line-height: 0.74rem;
	}
</style>