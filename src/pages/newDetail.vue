
<!-- 新闻详细内容页面 -->

<template>
	<div>
		<!-- 头部组件-返回主页 -->
		<div class="header">
			<router-link class="back" to="/news" @click.native="backHome"></router-link>
		</div>
		<!-- 新闻详细内容 -->
		<detail-content></detail-content>
		<!-- 评论组件 -->
		<comment-list v-show="comment"></comment-list>		
		<!-- 底部组件 -->
		<detail-bottom v-show="!shareState"></detail-bottom>
		<!-- 分享面板 -->
		<share-panel v-show="shareState"></share-panel>
		<!-- 输入面板 -->
		<write-panel v-if="writeComment"></write-panel>
		<!-- 蒙版 -->
		<div class="cover" v-show="maskingState" @click="hide"></div>
	</div>
</template>


<script>
	import DetailContent from '../components/detailNew.vue'
	import DetailBottom from '../components/detailBottom.vue'
	import SharePanel from '../components/detailShare.vue'
	import CommentList from '../components/detailComment.vue'
	import WritePanel from '../components/writePanel.vue'
	export default{
		name:'newDetail',
		computed:{
			comment:function(){
				return this.$store.state.comment;
			},
			shareState:function(){
				return this.$store.state.shareState;
			},
			writeComment:function(){
				return this.$store.state.writeComment;
			},
			maskingState:function(){
				return this.shareState || this.writeComment;
			}
		},
		components:{
			DetailContent,
			DetailBottom,
			SharePanel,
			CommentList,
			WritePanel
		},
		methods:{
			backHome:function(){//返回主页修改inIndex，显示主页底部导航
				this.$store.dispatch("inIndex");
			},
			hide:function(){//修改outShare，退出分享界面
				this.$store.dispatch('outShare');
				if(this.$store.state.writeComment){
					this.$store.dispatch('toggleWrite');	
				}
			},
			getData(){//获取新闻相关信息存入store
				this.$ajax.get("/api/newsContent").then((response) => {
					this.$store.commit('Set_NewInfo',response.data.data);
				})
			}
		},
		created(){
			this.getData();
			this.$store.dispatch("outIndex");
		}
	}
</script>

<style scoped>
	.header{
		width: 100%;
		height: 1.31rem;
		border-bottom: 0.01rem solid #E2E4E6;
		position: fixed;
		top: 0;
		background-color: #FFFFFF;
		z-index: 2;
	}
	.back{
		background-image: url("../assets/4_icon_back.png");
		background-size: 100%;
		background-repeat: no-repeat;
		width: 0.32rem;
		height: 0.32rem;
		margin-left: 0.3rem;
		margin-top: 0.68rem;
		display: block;
		position: absolute;
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