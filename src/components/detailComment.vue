
<!-- 评论组件——评论列表 -->


<template>
	<div>
		<span>全部评论({{number}})</span>
		<comment-item v-for="(item,index) in items" :key="index"></comment-item>		
	</div>
</template>

<script>
	import CommentItem from '../components/detailCommentItem.vue'
	export default{
		name:'newsComment',
		components:{
			CommentItem
		},
		data:function(){
			return {
				items:this.$store.state.newInfo.comments?this.$store.state.newInfo.comments:[]
			}
		},
		computed:{
			number:function(){
				return this.items.length;
			}
		}
	}
</script>