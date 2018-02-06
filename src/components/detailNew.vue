
<!-- 新闻栏目-文章详细内容展示组件 -->

<template>
	<div class="outer-box">
		<span :class="['news-title',darkState?'night-title':'']">{{news.titile}}</span >
		<div class="container inner-box">
			<div class="row">
				<div class="col-xs-1">
					<i :class="['source-img',darkState?'night-img':'']"></i>
				</div>
				<div class="col-xs-5 box2">
					<span :class="['source-name',darkState?'night-samll-word':'']">{{news.source}}</span>
					<div :class="['top-box',darkState?'night-top-box':'day-top-box']"><span :class="['top',darkState?'night-top':'day-top']">置顶</span></div>
					<span :class="['time',darkState?'night-samll-word':'']">{{dateTme}}</span>
				</div>
				<div class="col-xs-2 col-xs-offset-4 order-box">
					<span :class="['order',orderState?darkState?'night-unactive':'day-unactive':darkState?'night-active':'day-active']" @click="toggleOrder">订阅</span>
				</div>
			</div>
		</div>
		<news-content v-if="!this.$store.state.comment"></news-content>
	</div>
</template>

<script>
import NewsContent from '../components/detailNewsContent.vue'
	export default{
		name:'detailContent',
		data:function(){
			return {
				orderState:false
			}
		},
		computed:{
			news:function(){
				return this.$store.state.newInfo;
			},
			dateTme:function(){
				return this.news.dateTme?this.news.dateTme.split(' ')[0]:'';
			},
			darkState:function(){
				return this.$store.state.darkState;
			}
		},
		components:{
			NewsContent
		},
		methods:{
			toggleOrder:function(){
				this.orderState = !this.orderState;
				//订阅或取消订阅
				//...
			}
		}
	}
</script>


<style scoped>
	.outer-box{
		padding: 0 0.3rem 0.6rem 0.3rem;
	}
	.inner-box{
		margin-bottom: 0.31rem;
	}
	.news-title{
		display: block;
		font-size: 0.42rem;
		line-height: 0.52rem;
		text-align: left;
		padding-top: 0.3rem;
		padding-bottom: 0.18rem;
		font-weight: bold;
	}
	.night-title{
		color: #A2A4A6;
	}
	.source-img{
		background-image: url("../assets/35_img_54X54.png");
		background-repeat: no-repeat;
		background-size: 100%;
		display: block;
		width: 0.54rem;
		height: 0.54rem;
	}
	.box2{
		position: relative;
		height: 0.54rem;
	}
	.top-box{
		position: absolute;
		bottom: 0px;
		width: 0.4rem;
		height: 0.2rem;
	}
	.day-top-box{
		border: 1px solid #FF0000;
	}
	.night-top-box{
		border: 1px solid #0088FF;
	}
	.top{
		font-size: 0.16rem;
		display: inline-block;
		width: 0.34rem;
		position: absolute;
		left: 0.04rem;
		bottom: -0.02rem;
	}
	.day-top{
		color: #FF0000;
	}
	.night-top{
		color: #0088FF;
	}
	.source-name{
		font-size: 0.24rem;
		display: block;
		text-align: left;
		position: relative;
		left: 0px;
		font-weight: bold;
	}
	.time{
		display: block;
		color: #A5A5A5;
		font-size: 0.22rem;
		position: absolute;
		left: 0.7rem;
		bottom: -0.06rem;
	}
	.order{
		width: 1.06rem;
		height: 0.52rem;
		font-size: 0.24rem;
		display: block;
		line-height: 0.52rem;
		border-radius: 0.06rem;
		text-align: center;
		border-width: 0;
	}
	.day-active{
		background-color: #008CFF;
		color: #FFFFFF;
	}
	.night-active{
		background-color: #2A2A30;
		color: #6F7379;
	}
	.day-unactive{
		background-color: #A5A5A5;
		color: #FFFFFF;
	}
	.night-unactive{
		background-color: #0088FF;		
		color: #6F7379;
	}
	.order-box{
		margin-top: 5px;
	}
	.night-samll-word{
		color:  #6F7379;
	}
	.night-img{
		opacity: .8;
	}
</style>

