
<!-- 新闻详细内容页面 -->

<template>
	<div>
		<!-- 头部组件-返回主页 -->
		<div class="header">
			<router-link class="back" to="/news" @click="backHome"></router-link>
		</div>
		<!-- 评论组件 -->
		<comment-list v-show="this.$store.state.comment"></comment-list>
		<!-- 新闻详细内容 -->
		<detail-content v-show="!this.$store.state.comment"></detail-content>
		<!-- 底部组件 -->
		<detail-bottom v-show="!this.$store.state.shareState"></detail-bottom>
		<!-- 分享面板 -->
		<share-panel v-show="this.$store.state.shareState"></share-panel>
		<!-- 蒙版 -->
		<div class="cover" v-show="this.$store.state.shareState" @click="hide"></div>
	</div>
</template>


<script>
	import DetailContent from '../components/detailNew.vue'
	import DetailBottom from '../components/detailBottom.vue'
	import SharePanel from '../components/detailShare.vue'
	import CommentList from '../components/detailComment.vue'
	export default{
		name:'newDetail',
		data:function(){
			return {
				comment: false
			}
		},
		components:{
			DetailContent,
			DetailBottom,
			SharePanel,
			CommentList
		},
		methods:{
			backHome:function(){//返回主页修改inIndex，显示主页底部导航
				this.$store.dispatch("inIndex");
			},
			hide:function(){//修改outShare，退出分享界面
				this.$store.dispatch('outShare');
			},
			getData(){//获取新闻相关信息存入store
				this.$ajax.get("/api/newsContent").then((response) => {
					this.$store.commit('Set_NewInfo',response.data.data);
				})
			}
		},
		created(){
			this.getData();
			this.$store.dispatch("inDetail");
		}
	}
</script>

<style scoped>
	.header{
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #E2E4E6;
		position: fixed;
		top: 0;
		background-color: #FFFFFF;
		z-index: 2;
	}
	.back{
		background-image: url("../assets/4_icon_back.png");
		background-size: 100%;
		background-repeat: no-repeat;
		width: 16px;
		height: 16px;
		margin-left: 20px;
		display: block;
		position: absolute;
		top: 50%;
		margin-top: -8px;
	}
	.cover{
		background-color: rgba(0,0,0,0.50);
		opacity:0.6;
		width: 100%;
		height: 100%;
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 3;
	}
</style>