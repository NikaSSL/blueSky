
<!-- 搜索组件-搜索结果展示组件 -->

<template>
	<!-- 查询有结果 -->
	<div v-if="flag">
		<new-item v-for="(item,index) in result" v-if="item" :item="item" :key="index"></new-item>
	</div>
	<!-- 查询无结果 -->
	<div v-else>
		
	</div>
</template>

<script>
	import NewItem from '../components/newsListItem.vue'
	export default{
		name:'seachContent',
		components:{
			NewItem
		},
		computed:{
			result:function(){//查询的详细结果
				return this.$store.state.searchResult;
			},
			flag:function(){//查询结果，找到为true，未找到为false
				 return !!this.result;
			}
		}
	}
</script>