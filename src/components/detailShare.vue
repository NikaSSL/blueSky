<template>
	<div :class="['share-panel',darkState?'night-share-panel':'day-share-panel']">
		<div class="container">
			<div class="row">
				<share-icn class="col-xs-4" v-for="(item,index) in icnInfo" :key="index" :imgSrc1="item.imgSrc1" :imgSrc2="item.imgSrc2" :msg="item.msg"></share-icn>
			</div>
		</div>
		<div :class="['line',darkState?'night-line':'day-line']"></div>
		<span :class="['cancel',darkState?'night-cancel':'day-cancel']" @click="cancelShare">取消</span>
	</div>

</template>

<script>
import ShareIcn from '../components/detailShareIcn.vue'
	export default{
		name:'sharePanel',
		data:function(){
			return {
				icnInfo:[{
						imgSrc1:'/static/img/20_share_wechat2.png',
						imgSrc2:'../static/img/50_dark_share_wechat.png',
						msg:'微信'
					},{
						imgSrc1:'/static/img/19_share_wechat.png',
						imgSrc2:'../static/img/49_dark_share_wechat.png',
						msg:'朋友圈'
					},{
						imgSrc1:'/static/img/21_share_sina.png',
						imgSrc2:'../static/img/51_dark_-share_sina.png',
						msg:'新浪微博'
					},{
						imgSrc1:'/static/img/18_share_qq.png',
						imgSrc2:'../static/img/52_dark_share_qq.png',
						msg:'QQ'
					},{
						imgSrc1:'',
						imgSrc2:'',
						msg:'敬请期待'
					},{
						imgSrc1:'',
						imgSrc2:'',
						msg:'敬请期待'
					}
				]
			}
		},
		computed:{
			darkState:function(){
				return this.$store.state.darkState;
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
		border-radius: 0.12rem;
		padding: 0;
		margin: 0 auto;
		width: 6.9rem;
		height: 4.43rem;
		text-align: center;
		z-index: 999;
	}
	.day-share-panel{
		background-color: #FFFFFF;
	}
	.night-share-panel{
		background-color: #2A2A30;
	}
	.line{
		height: 1px;
		width: 6.5rem;
		margin: 0 auto;
		margin-top: 0.3rem;
		margin-bottom: 0.29rem;
	}
	.day-line{
		background-color: #E2E4E6;
	}
	.night-line{
		background: rgba(226,228,230,0.20);
	}
	.cancel{
		display: block;
		font-size: 0.32rem;
		margin-top: 0.29rem;
	}
	.day-cancel{
		color: #FF0000;
	}
	.night-cancel{
		color: #A2A4A6;
	}
</style>