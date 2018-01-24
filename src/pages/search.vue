
<!-- 搜索页面 -->

<template>
	<div class="outer-box">

		<div class="header">
			<input type="text" placeholder="  请输入关键字" autofocus="autofocus" class="search-input">
			<router-link to='/news' @click.native="backHome" class="black">取消</router-link>
		</div>

		<!-- 搜索时，展示热门搜索关键字 -->
		<div v-show="searchState" class="default">
			<span class="search-key">热门搜索关键字</span>
			<div v-for="(item,index) in hotKeys" :key="index" class="hot-key">
				<span>{{item}}</span>
			</div>
		</div>
		
		<!-- 搜索后，展示搜索结果 -->
		<seach-content v-if="!searchState"></seach-content>

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
				searchState:true,
				hotKeys:['招商人和','科技时事','双十二纪念日','深圳时事','设计资讯']
			}
		},
		methods:{
			backHome:function(){//返回新闻首页
				this.$store.dispatch('inIndex');
			}
		}
	}
</script>

<style scoped>
	.outer-box{
		width: 100%;
	}
	.black{
		color: #333333;
	}
	.header{
		width: 90%;
		height: 45px;
		margin: 0 auto;
		margin-top: 20px;
		margin-bottom: 10px;
		font-size: 14px;
	}
	.search-input{
		width: 80%;
		height: 35px;
		background-color: #F1F3F5;
		border-radius: 5px;
		color: #A5A5A5;
		margin-right: 15px
	}
	.default{
		width: 90%;
		margin: 0 auto;
	}
	.search-key{
		font-weight: bold;
		display: block;
	}
	.hot-key{
		display: inline-block;
		color: #A5A5A5;
		border-radius: 50px;
		border: 1px solid #A5A5A5;
		height: 30px;
		margin: 15px 25px 0 0;
	}
	.hot-key span{
		display: block;
		margin: 0 auto;
		margin-left: 10px;
		margin-right: 10px;
		height: 30px;
		line-height: 30px;
	}
</style>
