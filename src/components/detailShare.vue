<template>
	<div class="container">
		<div class="row">
			<share-icn class="col-xs-4" v-for="(item,index) in icnInfo" :key="index"></share-icn>
		</div>
	</div>
</template>

<script>
import ShareIcn from '../components/detailShareIcn.vue'
	export default{
		name:'sharePanel',
		data:{
			return {
				icnInfo:[{
						imgSrc:'../assets//20_share_wechat2.png',
						msg:'微信'
					},{
						imgSrc:'../assets/19_share_wechat.png',
						msg:'朋友圈'
					},{
						imgSrc:'../assets/21_share_sina.png',
						msg:'新浪微博'
					},{
						imgSrc:'../assets/18_share_qq.png',
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
		}
	}
</script>

<style scoped>
	
</style>