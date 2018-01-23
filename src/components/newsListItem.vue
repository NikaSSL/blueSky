
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
					<span>{{item.comments[0].count}}</span>
					<span>{{item.comments[0].thumbUp}}</span>
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
					<span>{{item.comments[0].count}}</span>
					<span>{{item.comments[0].thumbUp}}</span>
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
	}
</style>
