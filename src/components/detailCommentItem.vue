
<!-- 评论组件——单个评论 -->

<template>
<!-- 	<div class="container item-box">
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
	</div> -->
	<div :class="['item-box',darkState?'night-word':'']">
		<div class="icon-box">
			<img :src="item.icon" :class="['icon',darkState?'night-icon':'']">
		</div>
		<div :class="['inner-box',darkState?'night-line':'day-line']">
			<div class="column two-side">
				<div class="name">{{item.name}}</div>
				<div :class="['thumbUp',good?'after-thumbUp':'before-thumbUp']">
					<div>{{item.thumbUp}}</div>
					<i :class="['thumb',good?'good1':'good2']" @click="toggleThumb"></i>
				</div>				
			</div>
			<div class="content">{{item.text}}</div>				
			<div class="date-time">{{dateTime}}</div>				
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
		computed:{
			dateTime:function(){
				return this.item.dateTime.split(' ')[0]
			},
			darkState:function(){
				return this.$store.state.darkState;
			}
		},
		props:['item'],
		methods:{
			toggleThumb:function(){
				this.good = !(this.good)
				//增加点赞数量或减少点赞数量
				//...
			}
		}
	}
</script>

<style scoped>
	.item-box{
		display: flex;
		padding-left: 0.3rem;
		padding-top: 0.3rem;
	}
	.night-word{
		color: #A2A4A6;
	}
	.inner-box{
		display: flex;
		width: 6.52rem;
		flex-wrap: wrap;
		padding-bottom: 0.3rem;
		padding-right: 0.3rem;
	}
	.day-line{
		border-bottom: 1px solid #E2E4E6;
	}
	.night-line{
		border-bottom: 1px solid #2A2A30;
	}
	.column{
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.icon{
		border-radius: 50%;
		width: 0.54rem;
		height: 0.54rem;
	}
	.night-icon{
		opacity: 0.5;
	}
	.icon-box{
		margin-right: 0.14rem;
	}
	.thumb{
		display: block;
		width: 0.26rem;
		height: 0.26rem;
		background-size: 100%;
		background-repeat: no-repeat;
		margin-left: 0.06rem;
	}
	.thumbUp{
		display: flex;
		align-items: center;
		font-size: 0.26rem;
	}
	.before-thumbUp{
		color: #6F7379;
	}
	.after-thumbUp{
		color: #008CFF;
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
		width: 6.22rem;
	}
	.decorate{
		border-bottom: 1px solid #E2E4E6;
		padding-bottom: 5px;
	}
	.date-time{
		font-size: 0.22rem;
		color: #A5A5A5;
	}
</style>