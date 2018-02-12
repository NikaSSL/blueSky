
<!-- 搜索组件-搜索结果展示组件 -->

<template>
	<div class="result-box">
	<!-- 查询有结果 -->
		<div v-if="flag">
			<new-item v-for="(item,index) in result" v-if="item" :item="item" :key="index"></new-item>
		</div>
		<!-- 查询无结果 -->
		<div v-else :class="['item',darkState?'night-item':'day-item']">
			<img src="../assets/55_load_fail.png" :class="[darkState?'night-img':'']">
			<span>无相关关键字文章</span>
		</div>		
	</div>
</template>

<script>
	import NewItem from '../components/newsListItem.vue'
	export default{
		name:'searchContent',
		components:{
			NewItem
		},
		computed:{
			result:function(){//查询的详细结果
				return this.$store.state.searchResult;
			},
			flag:function(){//查询结果，找到为true，未找到为false
				 return !!this.result[0];
				 // return false;
			},
			darkState:function(){
				return this.$store.state.darkState;
			}
		}
	}
</script>

<style scoped>
	.result-box{
		text-align: center;
	}
	.item{
		margin-top: 3rem;
		font-size: 0.32rem;
	}
	.day-item{
		color: #A5A5A5;
	}
	.night-item{
		color: #6F7379;
	}
	.item img{
		display: block;
		margin: 0 auto;
		width: 3rem;
		height: 2.9rem;
	}
	.night-img{
		opacity: .5;
	}
</style>