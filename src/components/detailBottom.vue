
<!-- 新闻栏目-详细文章界面底部组件 -->

<template>
	<div class="conatiner box">
		<div class="row box1">
			<div class="col-xs-6">
				<write-comment></write-comment>
			</div>
			<div class="col-xs-5 col-xs-offset-1 box2">
				<div :class="comment?'col-xs-7':'col-xs-4'">
					<i class="icn" :class="comment?'comment2':'comment1'" @click="toggleComment"></i>
					<span v-show="comment" class="blue-style">正文</span>
				</div>
				<div class="col-xs-4" v-show="!comment">
					<i class="icn" :class="uncollect?'collect1':'collect2'" @click="toggleCollect"></i>
				</div>
				<div class="col-xs-4">
					<i class="icn share" @click="share"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import WriteComment from '../components/writeComment.vue'
	export default{
		name:'detailBottom',
		data:function(){
			return{
				uncollect:true
			}
		},
		computed:{
			comment:function(){
				return this.$store.state.comment;
			}
		},
		components:{
			WriteComment
		},
		methods:{
			share:function(){//分享
				this.$store.dispatch("inShare");
			},
			toggleCollect:function(){//收藏
				this.uncollect = !(this.uncollect);
			},
			toggleComment:function(){//评论
				this.$store.dispatch('toggleComment');
			}
		} 
	}
</script>

<style scoped>
	.box{
		position: fixed;
        height: 1rem;
        width: 100%;
        bottom: 0;
        left: 0;
        border-top: 1px solid #E2E4E6;
        background-color: #FFFFFF;
        font-size: 0.28rem;
	}
	.box1{
		margin-top: 0.2rem;
	}
	.box2{
		margin-top: 0.1rem;
	}
	.icn{
		width: 0.4rem;
		height: 0.4rem;
		background-size: 100%;
		background-repeat: no-repeat;
		display: block;
	}
	.comment1{
		background-image: url("../assets/13_comment.png");
	}
	.comment2{
		background-image: url("../assets/17_backnews.png");
		display: block;
		float: left;
	}
	.collect1{
		background-image: url("../assets/14_collect.png");
	}
	.collect2{
		background-image: url('../assets/14_collect2.png');
	}
	.share{
		background-image: url("../assets/13_share.png");
	}
	.blue-style{
		color: #008BFF;
		display: block;
		float: left;
	}
</style>