
<!-- 搜索组件-搜索结果展示组件 -->

<template>
	<div class="result-box">
	<!-- 查询有结果 -->
		<div v-if="flag">
			<new-item v-for="(item,index) in result" v-if="item" :item="item" :key="index"></new-item>
		</div>
		<!-- 查询无结果 -->
		<div v-else class="item">
			<img src="../assets/55_load_fail.png">
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
			}
		}
	}
</script>

<style scoped>
	.result-box{
		text-align: center;
	}
	.item{
		margin-top: 40%;
		font-size: 16px;
		color: #A5A5A5;	
	}
	.item img{
		display: block;
		margin: 0 auto;
		width: 40%;
	}
</style>