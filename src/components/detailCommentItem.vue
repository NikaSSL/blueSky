
<!-- 评论组件——单个评论 -->

<template>
	<div class="container item-box">
		<div class="row">
			<div class="col-xs-1">
				<img :src="item.icon" class="icon">
			</div>
			<div class="col-xs-10 col-xs-offset-1 decorate">
				<div class="row">
					<div class="col-xs-6"><span class="name">{{item.name}}</span></div>
					<div class="col-xs-3 col-xs-offset-3 right">
						{{item.thumbUp}}
						<i :class="['thumb',good?'good1':'good2']" @click="toggleThumb"></i>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12">
						<p class="content">{{item.text}}</p>
						<span class="date-time">{{item.dateTime}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'commentItem',
		data:function(){
			return{
				good:false
			}
		},
		props:['item'],
		methods:{
			toggleThumb:function(){
				this.good = !(this.good);
				//增加点赞数量或减少点赞数量
				//...
			}
		}
	}
</script>

<style scoped>
	.icon{
		border-radius: 50%;
		width: 0.54rem;
		height: 0.54rem;
	}
	.thumb{
		display: inline-block;
		width: 0.26rem;
		height: 0.26rem;
		background-size: 100%;
		background-repeat: no-repeat;
	}
	.right{
		text-align: right;
		font-size: 0.26rem;
	}
	.good1{
		background-image: url('../assets/6_icon_good2.png');
	}
	.good2{		
		background-image: url('../assets/6_icon_good.png');
	}
	.name{
		font-size: 0.26rem;
		font-weight: bold;
	}
	.content{
		font-size: 0.32rem;
		letter-spacing: 0.007rem;
		line-height: 0.5rem;
	}
	.decorate{
		border-bottom: 1px solid #E2E4E6;
		padding-bottom: 5px;
	}
	.item-box{
		margin-top: 15px;
	}
	.date-time{
		font-size: 0.22rem;
		color: #A5A5A5;
	}
</style>