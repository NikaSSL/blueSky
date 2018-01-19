<template>
	<span>全部评论({{number}})</span>
	<comment-item v-for="(item,index) in items" :key="index"></comment-item>
</template>

<script>
	import CommentItem from '../components/detailCommentItem.vue'
	export default{
		name:'newsComment',
		components:{
			CommentItem
		}
	}
</script>