
<!-- 评论组件——评论列表 -->


<template>
	<div class="list-box">
		<span class="decorate">全部评论({{number}})</span>
		<div v-show="!number">
			<img src="../assets/56_no_comment.png" class="none-comment">
		</div>
		<comment-item v-for="(item,index) in items" :key="index" :item='item' v-show="number"></comment-item>		
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
		margin-top: -0.4rem;
		margin-bottom: 55px;
	}
	.decorate{
		margin-left: 0.3rem;
		font-size: 0.26rem;
	}
	.none-comment{
		display: block;
		width: 3rem;
		left: 50%;
		transform: translateX(50%);
		margin-top: 1.48rem;
	}
</style>