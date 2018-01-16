<template>
	<div>
		<head-ban></head-ban>
		<!-- 利用v-if判断是否加载 -->
		<router-link to="/newDetail">查看新闻详情</router-link>
		<news-new v-for="(item,index) in newsList" v-if="item" :item="item" :key="index"></news-new>
	</div>
</template>

<script>
import HeadBan from '../components/header.vue'
import NewsNew from '../components/newsNew.vue'
	export default{
		name:'news',
		components:{
			HeadBan,
			NewsNew
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