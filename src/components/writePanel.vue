<template>
	<div :class="['write-panel',darkState?'night-panel':'day-panel']">
		<textarea :class="['write-area',darkState?'night-area':'day-area']" placeholder="写评论" autofocus="autofocus"></textarea>
		<span class="send" @click="send">发送</span>
	</div>
</template>

<script>
	export default{
		name:'writePanel',
		computed:{
			darkState:function(){
				return this.$store.state.darkState;
			}
		},
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
		width: 7.5rem;
		height: 2.7rem;
		font-size: 0.32rem;
		color:  #A5A5A5;
	}
	.day-panel{
		background-color: #FFFFFF;
	}
	.night-panel{
		background-color:  #2A2A30;
	}
	.write-area{
		display: block;
		width: 6.9rem;
		height: 1.2rem;
		margin: 0 auto;
		margin-top: 0.3rem;
		margin-bottom: 0.3rem;
		border-width: 0;
	}
	.day-area{
		background-color:  #F1F3F5;
	}
	.night-area{
		background-color:  #39393E;
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