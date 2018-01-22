
<!-- 评论组件——单个评论 -->


<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-1">
				<img src="iconImg" class="icon">
			</div>
			<div class="col-xs-11">
				<div class="row">
					<div class="col-xs-2">用户名</div>
					<div class="col-xs-2">
						数量
						<i :class="good?'good1':'good2'" @click="toggle"></i>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12">
						<p class="content">评论内容</p>
						<span>发表时间</span>
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
		methods:{
			toggle:function(){
				this.good = !(this.good);
			}
		}
	}
</script>

<style scoped>
	.icon{
		border-radius: 50%;
		width: 27px;
		height: 27px;
	}
	.good1{
		background-image: url('../assets/6_icon_good.png');
	}
	.good2{
		background-image: url('../assets/6_icon_good2.png');
	}
</style>