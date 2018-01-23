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
		width: 100%;
	}
	.write-area{
		display: block;
		width: 90%;
		height: 60px;
		margin: 0 auto;
		margin-top: 15px;
		margin-bottom: 15px;
	}
	.send{
		display: block;
		width: 90%;
		height: 37px;
		font-size: 16px;
		color: #A5A5A5;
		border: 1px solid #A5A5A5;
		border-radius: 2px;
		margin: 0 auto;
		margin-bottom: 15px;
		text-align: center;
		line-height: 37px;
	}
</style>