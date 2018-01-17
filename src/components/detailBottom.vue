
<!-- 新闻栏目-详细文章界面底部组件 -->

<template>
	<div class="conatiner box">
		<div class="row box1">
			<div class="col-xs-6">
				<write-comment></write-comment>
			</div>
			<div class="col-xs-4 col-xs-offset-1 box2">
				<div class="col-xs-4">
					<i class="icn comment"></i>
				</div>
				<div class="col-xs-4">
					<i class="icn collect1"></i>
				</div>
				<div class="col-xs-4">
					<i class="icn share"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import WriteComment from '../components/writeComment.vue'

	export default{
		name:'detailBottom',
		components:{
			WriteComment
		}
	}
</script>

<style scoped>
	.box{
		position: fixed;
        height: 50px;
        width: 100%;
        bottom: 0;
        left: 0;
        border-top: 1px solid #E2E4E6;
        background-color: #FFFFFF;
	}
	.box1{
		margin-top: 10px;
	}
	.box2{
		margin-top: 5px;
	}
	.icn{
		width: 20px;
		height: 20px;
		background-size: 100%;
		background-repeat: no-repeat;
		display: block;
	}
	.comment{
		background-image: url("../assets/13_comment.png");
	}
	.collect1{
		background-image: url("../assets/14_collect.png");
	}
	.share{
		background-image: url("../assets/13_share.png");
	}
</style>