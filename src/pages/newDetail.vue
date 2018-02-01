
<!-- 新闻详细内容页面 -->

<template>
	<div>
		<!-- 头部组件-返回主页 -->
		<head-ban :headText="headText" :searchState="searchState" :backState="backState"></head-ban>
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
	import HeadBan from '../components/indexHeader.vue'
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
			},
			inNews:function(){
				return this.$store.state.news;				
			}
		},
		data:function(){
			return {
				headText:'',
				searchState:false,
				backState:true
			}
		},
		components:{
			DetailContent,
			DetailBottom,
			SharePanel,
			CommentList,
			WritePanel,
			HeadBan
		},
		methods:{
			backNewList:function(){//返回主页修改inIndex，显示主页底部导航
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