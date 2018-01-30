
<!-- 搜索页面 -->

<template>
	<div class="outer-box">

		<div class="header">
			<input type="text" placeholder="请输入关键字" class="search-input" @keyup.enter="search" v-model="searchWords" autofocus="autofocus">
			<i class="delete" v-show="searchWords" @click="empty"></i>
			<router-link to='/news' @click.native="backHome" class="black">取消</router-link>
		</div>

		<!-- 搜索时，展示热门搜索关键字 -->
		<div v-show="searchStatus" class="default">
			<span class="search-key">热门搜索关键字</span>
			<div v-for="(item,index) in hotKeys" :key="index" class="hot-key">
				<span>{{item}}</span>
			</div>
		</div>
		
		<!-- 搜索后，展示搜索结果 -->
		<search-content v-if="!searchStatus"></search-content>

	</div>
</template>

<script>
	import SearchContent from '../components/searchContent.vue'
	export default{
		name:'search',
		components:{
			SearchContent
		},
		data:function(){
			return {
				searchStatus:true,//搜索时为true,初始为true
				hotKeys:['招商人和','科技时事','双十二纪念日','深圳时事','设计资讯'],//以后动态获取
				searchWords:''
			}
		},
		methods:{
			backHome:function(){//返回新闻首页
				this.$store.dispatch('inIndex');
			},
			search:function(){//获取搜索结果
				this.$ajax.get("/api/newsList").then((response) => {
					this.$store.commit('Set_searchResult',response.data.data)
				});
				this.searchStatus = false;	
			},
			empty:function(){//清空输入框
				this.searchWords = '';
			}
		}
		// ,directives:{
		// 	focus:{
		// 		inserted:function(el,{value}){
		// 			if (value) {
		// 			  el.focus();          
		// 			}
		// 		}
		// 	}
		// }
	}
</script>

<style scoped>
	.outer-box{
		width: 100%;
		height: 100%;
		font-size: 0.28rem;
	}
	.black{
		color: #333333;
	}
	.header{
		width: 100%;
		margin: 0 auto;
		margin-top: 0.5rem;
		margin-bottom: 0.4rem;
	}
	.search-input{
		width: 6rem;
		height: 0.7rem;
		background-color: #F1F3F5;
		border-radius: 0.1rem;
		color: #A5A5A5;
		margin-right: 0.3rem;
		margin-left: 0.3rem;
	}
	.default{
		width: 90%;
		margin: 0 auto;
	}
	.search-key{
		font-weight: bold;
		display: block;
		margin-bottom: 0.2rem;
	}
	.hot-key{
		display: inline-block;
		color: #A5A5A5;
		border-radius: 1rem;
		border: 1px solid #A5A5A5;
		height: 0.6rem;
		margin: 0 0.5rem 0.3rem 0;
	}
	.hot-key span{
		display: block;
		margin: 0 auto;
		margin-left: 0.2rem;
		margin-right: 0.2rem;
		height: 0.6rem;
		line-height: 0.6rem;
	}
	.delete{
		background-image: url('../assets/28_delete.png');
		width: 0.32rem;
		height: 0.32rem;
		display: block;
		background-size: 100%;
		background-repeat: no-repeat;
		position: absolute;
		top: 0.7rem;
		right: 1.5rem;
	}
</style>
