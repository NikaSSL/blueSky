
<!-- 新闻列表的单个新闻项 -->

<template>
	<div>
		<div class="container" v-if="item.image.position==='right'">
			<div class="row">
				<div class="col-xs-8">
					<h4>{{item.titile}}</h4>
					<span v-if="item.top">置顶</span>
					<span>{{item.dateTme}}</span>
					<span>{{item.source}}</span>
					<span>{{item.comments[0].count}}</span>
					<span>{{item.comments[0].thumbUp}}</span>
				</div>
				<div class="col-xs-4">
					<img v-bind:src='item.image.url'>
				</div>
			</div>
		</div>
		
		<div class="container" v-else>
			<div class="row" v-if="item.image.position==='block'">
				<div class="col-xs-12">
					<h4>{{item.titile}}</h4>
				</div>
				<div class="col-xs-12">
					<img v-bind:src='item.image.url'>
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
	</div>
</template>   

<script>
	export default{
		name:'newsNew',
		props:['item']
	}
</script>

