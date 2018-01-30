<template>
	<div class="outer-box">
		<head-ban></head-ban>
		<!-- 利用v-if判断是否加载 -->
		<new-item v-for="(item,index) in newsList" v-if="item" :item="item" :key="index"></new-item>
	</div>
</template>

<script>
import HeadBan from '../components/indexHeader.vue'
import NewItem from '../components/newsListItem.vue'
	export default{
		name:'news',
		components:{
			HeadBan,
			NewItem
		},
		data(){
			return {
				newsList:[]
			}
		},
		created(){
			//vuex设置状态，改变class
			this.$store.dispatch("inNews");
		},
		methods:{
			getData(){
				//获取JSON数据
				this.$ajax.get("/api/newsList").then((response) => {
					this.newsList = response.data.data;
				});
			}
		},
		mounted(){
			this.getData();
		}
	}
</script>

<style scoped>
	.outer-box{
		padding-top: 1.31rem;
		padding-bottom: 1rem;
	}
</style>