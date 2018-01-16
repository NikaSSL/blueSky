<template>
	<div>
		<span class="news-title">{{news.titile}}</span >
		<div class="container">
			<div class="row">
				<div class="col-xs-1">
					<i class="source-img"></i>
				</div>
				<div class="col-xs-5 box">
					<span class="source-name">UC新闻</span>
					<div class="top-box"><span class="top">置顶</span></div>
					<span class="time">刚刚更新</span>
				</div>
				<div class="col-xs-2 col-xs-offset-3 box2">
					<span class="order">订阅</span>
				</div>
			</div>
		</div>
		<div class="content"></div>	
	</div>
</template>

<style scoped>
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
	.box{
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
		left: -7px;
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
		left: -16px;
		top: -4px;
	}
	.order{
		background-color: #A5A5A5;
		width: 53px;
		height: 26px;
		color: #FFFFFF;
		font-size: 12px;
		display: block;
		line-height: 26px;
		border-radius: 3px;
	}
	.box2{
		margin-top: 5px;
	}
	.content{
		font-size: 16px;
	}
</style>

<script>
	export default{
		name:'detailContent',
		data(){
			return {
				news:''
			}
		},
		methods:{
			getData(){
				this.$ajax.get("/api/newsContent").then((response) => {
					this.news = response.data.data;
				})
			},
			getContent(){
				
			}
		},
		mounted(){
			this.getData();
		}
	}
</script>