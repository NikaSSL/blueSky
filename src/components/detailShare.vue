<template>
	<div class="share-panel">
		<div class="container">
			<div class="row">
				<share-icn class="col-xs-4" v-for="(item,index) in icnInfo" :key="index" :imgSrc="item.imgSrc" :msg="item.msg"></share-icn>
			</div>
		</div>
		<div class="line"></div>
		<span class="cancel" @click="cancelShare">取消</span>
	</div>

</template>

<script>
import ShareIcn from '../components/detailShareIcn.vue'
	export default{
		name:'sharePanel',
		data:function(){
			return {
				icnInfo:[{
						imgSrc:'/static/img/20_share_wechat2.png',
						msg:'微信'
					},{
						imgSrc:'/static/img/19_share_wechat.png',
						msg:'朋友圈'
					},{
						imgSrc:'/static/img/21_share_sina.png',
						msg:'新浪微博'
					},{
						imgSrc:'/static/img/18_share_qq.png',
						msg:'QQ'
					},{
						imgSrc:'',
						msg:'敬请期待'
					},{
						imgSrc:'',
						msg:'敬请期待'
					}
				]
			}
		},
		components:{
			ShareIcn
		},
		methods:{
			cancelShare:function(){
				this.$store.dispatch("outShare");
			}
		}
	}
</script>

<style scoped>
	.share-panel{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0.29rem;
		background-color: #FFFFFF;
		border-radius: 0.12rem;
		padding: 0;
		margin: 0 auto;
		width: 6.9rem;
		height: 4.43rem;
		text-align: center;
		z-index: 999;
	}
	.line{
		height: 1px;
		width: 6.5rem;
		background-color: #E2E4E6;
		margin: 0 auto;
		margin-top: 0.3rem;
		margin-bottom: 0.29rem;
	}
	.cancel{
		display: block;
		color: #FF0000;
		font-size: 0.32rem;
		margin-top: 0.29rem;
	}
</style>