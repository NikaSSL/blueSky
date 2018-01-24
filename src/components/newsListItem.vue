
<!-- 新闻列表的单个新闻项 -->

<template>
	<div>
		<div class="container new-item" v-if="item.image.position==='right'">
			<div class="row">
				<div class="col-xs-8">
					<span class="item-title">{{item.titile}}</span class="item-title">
					<span v-if="item.top">置顶</span>
					<span>{{item.dateTme}}</span>
					<span>{{item.source}}</span>
					<span><i class="icn count"></i>{{item.comments[0].count}}</span>
					<span><i class="icn thumbUp"></i>{{item.comments[0].thumbUp}}</span>
				</div>
				<div class="col-xs-4">
					<img v-bind:src='item.image.url' class="img-small">
				</div>
			</div>
		</div>
		
		<div class="container new-item" v-else>
			<div class="row" v-if="item.image.position==='block'">
				<div class="col-xs-12">
					<span class="item-title">{{item.titile}}</span class="item-title">
				</div>
				<div class="col-xs-12">
					<img v-bind:src='item.image.url' class="img-big">
				</div>
				<div class="col-xs-12">
					<span v-if="item.top">置顶</span>
					<span>{{item.dateTme}}</span>
					<span>{{item.source}}</span>
					<span><i class="icn count"></i>{{item.comments[0].count}}</span>
					<span><i class="icn thumbUp"></i>{{item.comments[0].thumbUp}}</span>
				</div>
			</div>			
		</div>
		<div class="line"></div>
	</div>
</template>   

<script>
	export default{
		name:'newsNew',
		props:['item']
	}
</script>

<style scoped>
	.new-item{
		width: 100%;
		margin-top: 10px;
		margin-bottom: 5px;
	}
	.img-small{
		width: 100px;
		height: 75px;
	}
	.img-big{
		width: 345px;
		height: 135px;
	}
	.line{
		width: 95%;
		height: 1px;
		background-color: #E2E4E6;
		margin: 0 auto;
	}
	.item-title{
		font-size: 16px;
		font-weight: bold;
		display: block;
		color: #333333;
	}
	.icn{
		width: 11px;
		height: 11px;
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
	span{
		font-size: 11px;
		color: #A5A5A5;
	}
</style>
