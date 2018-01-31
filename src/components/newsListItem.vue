
<!-- 新闻列表的单个新闻项 -->

<template>
	<router-link to="/newDetail">
		<div class="container new-item" v-if="item.image.position==='right'">
			<div class="row add-padding">
				<div class="col-xs-8 zero-padding">
					<span class="item-title">{{item.titile}}</span class="item-title">
					<div class="small-word1">
						<span v-if="item.top">置顶</span>
						<span>{{dateTme}}</span>
						<span>{{item.source}}</span>
						<span><i class="icn count"></i>{{item.comments[0].count}}</span>
						<span><i class="icn thumbUp"></i>{{item.comments[0].thumbUp}}</span>
					</div>

				</div>
				<div class="col-xs-4 text-right zero-padding">
					<img v-bind:src='item.image.url' class="img-small">
				</div>
			</div>
		</div>
		
		<div class="container new-item" v-else>
			<div class="row add-padding" v-if="item.image.position==='block'">
				<div class="col-xs-12 zero-padding">
					<span class="item-title">{{item.titile}}</span class="item-title">
				</div>
				<div class="col-xs-12 zero-padding">
					<img v-bind:src='item.image.url' class="img-big">
				</div>
				<div class="col-xs-12 small-word2 zero-padding">
					<span v-if="item.top">置顶</span>
					<span>{{dateTme}}</span>
					<span>{{item.source}}</span>
					<span><i class="icn count"></i>{{item.comments[0].count}}</span>
					<span><i class="icn thumbUp"></i>{{item.comments[0].thumbUp}}</span>
				</div>
			</div>			
		</div>
		<div class="line"></div>
	</router-link>
</template>   

<script>
	export default{
		name:'newsNew',
		props:['item'],
		computed:{
			dateTme:function(){
				return this.item.dateTme.split(' ')[0];
			}
		}
	}
</script>

<style scoped>
	.new-item{
		width: 100%;
		margin-top: 0.4rem;
		margin-bottom: 0.4rem;
		text-align: left;
	}
	.img-small{
		width: 2rem;
		height: 1.5rem;
	}
	.img-big{
		width: 6.9rem;
		height: 2.7rem;
		margin-top: 0.2rem;
	}
	.line{
		width: 96%;
		height: 1px;
		background-color: #E2E4E6;
		margin: 0 auto;
	}
	.item-title{
		font-size: 0.32rem;
		font-weight: bold;
		display: block;
		color: #333333;
		line-height: 0.42rem;
	}
	.icn{
		width: 0.22rem;
		height: 0.22rem;
		display: inline-block;
		background-repeat: no-repeat;
		background-size: 100%;
	}
	.count{
		background-image: url('../assets/5_icon_comment.png');
	}
	.thumbUp{
		background-image: url('../assets/6_icon_good.png');
	}
	.small-word1{
		margin-top: 0.44rem;
	}
	.small-word2{
		margin-top: 0.15rem;
	}
	span{
		font-size: 0.22rem;
		color: #A5A5A5;
	}
	.zero-padding{
		padding: 0;
	}
	.add-padding{
		padding-left: 0.3rem;
		padding-right: 0.3rem;
	}
</style>
