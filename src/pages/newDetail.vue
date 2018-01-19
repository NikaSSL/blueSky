
<!-- 新闻详细内容页面 -->

<template>
	<div>
		<div class="header">
			<router-link class="back" to="/news" @click="backHome"></router-link>
		</div>
		<detail-content></detail-content>
		<detail-bottom v-show="!this.$store.state.shareState"></detail-bottom>
		<share-panel v-show="this.$store.state.shareState"></share-panel>
		<div class="cover" v-show="this.$store.state.shareState" @click="hide"></div>
	</div>
</template>


<script>
	import DetailContent from '../components/detailNew.vue'
	import DetailBottom from '../components/detailBottom.vue'
	import SharePanel from '../components/detailShare.vue'
	export default{
		name:'newDetail',
		components:{
			DetailContent,
			DetailBottom,
			SharePanel
		},
		methods:{
			backHome:function(){
				this.$store.dispatch("inIndex");
			},
			hide:function(){
				this.$store.dispatch('outShare');
			}
		},
		created(){
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