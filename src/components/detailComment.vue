
<!-- 评论组件——评论列表 -->


<template>
	<div class="list-box">
		<span class="decorate">全部评论({{number}})</span>
		<comment-item v-for="(item,index) in items" :key="index" :item='item'></comment-item>		
	</div>
</template>

<script>
	import CommentItem from '../components/detailCommentItem.vue'
	export default{
		name:'newsComment',
		components:{
			CommentItem
		},
		computed:{
			items:function(){
				return this.$store.state.newInfo.comments?this.$store.state.newInfo.comments:[];
			},
			number:function(){
				return this.items.length;
			}
		}
	}
</script>

<style scoped>
	.list-box{
		margin-bottom: 55px;
	}
	.decorate{
		margin-left: 15px;
	}
</style>