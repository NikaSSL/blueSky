
<!-- 订阅页面 -->

<template>
	<div class="outer-box">
		<head-ban :headText="headText" :searchState="searchState" :backState="backState"></head-ban>
		<!-- 利用v-if判断是否加载 -->
		<new-item v-for="(item,index) in orderList" v-if="item" :item="item" :key="index"></new-item>
	</div>
</template>

<script>
import HeadBan from '../components/indexHeader.vue'
import NewItem from '../components/newsListItem.vue'
	export default{
		name:'orders',
		components:{
			HeadBan,
			NewItem
		},
		data(){
			return {
				orderList:{},
				headText:'订阅',
				searchState:true,
				backIndex:'/orders',
				backState:false
			}
		},
		created(){
			//vuex设置状态，改变class
			this.$store.dispatch("inOrders");
		},
		methods:{
			getData(){
				//获取JSON数据
				this.$ajax.get("/api/newsList").then((response) => {
					this.orderList = response.data.data;
				});
			}
		},
		mounted(){
			this.getData();
		},		
		created(){
			//vuex设置状态，改变class
			this.$store.dispatch("inOrders");
		}
	}
</script>

<style scoped>
	.outer-box{
		padding-top: 1.31rem;
		padding-bottom: 1rem;
	}
</style>
