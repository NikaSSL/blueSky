<template>
	<div>
		<head-ban></head-ban>
		<!-- 利用v-if判断是否加载 -->
		<news-new v-for="(item,index) in newsList" v-if="item" :item="item"></news-new>
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
				this.$ajax.get("/newsList").then((response) => {
					this.newsList = response.data.data;
				});
			}
		},
		mounted(){
			this.getData();
		}
	}
</script>