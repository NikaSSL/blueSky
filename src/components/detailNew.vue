<template>
	<div class="outer-box">
		<span class="news-title">{{news.titile}}</span >
		<div class="container">
			<div class="row">
				<div class="col-xs-1">
					<i class="source-img"></i>
				</div>
				<div class="col-xs-5 box2">
					<span class="source-name">{{news.source}}</span>
					<div class="top-box"><span class="top">置顶</span></div>
					<span class="time">{{news.dateTme}}</span>
				</div>
				<div class="col-xs-2 col-xs-offset-3 order-box">
					<span class="order">订阅</span>
				</div>
			</div>
		</div>
		<news-content :newContent="content"></news-content>
	</div>
</template>

<style scoped>
	.outer-box{
		margin: 55px 6px;
	}
	.news-title{
		font-size: 21px;
		line-height: 26px;
		text-align: left;

	}
	.source-img{
		background-image: url("../assets/35_img_54X54.png");
		background-repeat: no-repeat;
		background-size: 100%;
		display: block;
		width: 27px;
		height: 27px;
	}
	.box2{
		position: relative;
	}
	.top-box{
		border: 1px solid #FF0000;
		position: absolute;
		left: 15px;	
		width: 19px;
		height: 12.5px;
	}
	.top{
		color: #FF0000;
		font-size: 8px;
		display: inline-block;
		width: 30px;
		transform: scale(0.6);
		position: absolute;
		left: -5px;
		top: -3px;
	}
	.source-name{
		font-size: 12px;
		display: block;
		text-align: left;
		position: relative;
		left: 0px;
	}
	.time{
		color: #A5A5A5;
		font-size: 11px;
		position: relative;
		left: 20px;
		top: -4px;
	}
	.order{
		background-color: #0E8EFA;
		width: 53px;
		height: 26px;
		color: #FFFFFF;
		font-size: 12px;
		display: block;
		line-height: 26px;
		border-radius: 3px;
		text-align: center;
	}
	.order-box{
		margin-top: 5px;
	}
	.content{
		font-size: 16px;
	}
</style>

<script>
import NewsContent from '../components/detailNewsContent.vue'
	export default{
		name:'detailContent',
		data(){
			return {
				news:'',
				content:[]
			}
		},
		methods:{
			getData(){
				this.$ajax.get("/api/newsContent").then((response) => {
					this.news = response.data.data;
					this.content = this.news.content;
				})
			}
		},
		created(){
			this.getData();
		},
		components:{
			NewsContent
		}
	}
</script>