
<!-- 搜索页面 -->

<template>
	<div :class="['outer-box',darkState?'night-word':'day-word']">

		<div class="header">
			<input type="text" placeholder="请输入关键字" :class="['search-input',darkState?'night-search-input':'day-search-input']" @keyup.enter="search" v-model="searchWords" v-focus>
			<i :class="['delete',darkState?'night-delete':'']" v-show="searchWords" @click="empty"></i>
			<router-link :to="inNews?'/newList':'/orders'" @click.native="showFooter" class="day-word">取消</router-link>
		</div>

		<!-- 搜索时，展示热门搜索关键字 -->
		<div v-show="searchStatus" class="default">
			<span :class="['search-key',darkState?'night-search-key':'']">热门搜索关键字</span>
			<div v-for="(item,index) in hotKeys" :key="index" :class="['hot-key',darkState?'night-hot-key':'day-hot-key']">
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
		computed:{
			inNews:function(){
				return this.$store.state.news;
			},
			darkState:function(){
				return this.$store.state.darkState;
			}
		},
		methods:{
			showFooter:function(){//显示底部导航
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
	}
</script>

<style scoped>
	.outer-box{
		width: 100%;
		height: 100%;
		font-size: 0.28rem;
	}
	.day-word{
		color: #A5A5A5;
	}
	.night-word{
		color: #6F7379;
	}
	.header{
		width: 100%;
		margin: 0 auto;
		padding-top: 0.5rem;
		margin-bottom: 0.4rem;
	}
	.search-input{
		width: 6rem;
		height: 0.7rem;
		border-radius: 0.1rem;
		margin-right: 0.3rem;
		margin-left: 0.3rem;
		border-width: 0;
	}
	.day-search-input{
		background-color: #F1F3F5;
	}
	.night-search-input{
		background-color: #2A2A30;
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
	.night-search-key{
		color: #A2A4A6;
	}
	.hot-key{
		display: inline-block;
		border-radius: 1rem;
		height: 0.6rem;
		margin: 0 0.5rem 0.3rem 0;
	}
	.day-hot-key{
		border: 1px solid #A5A5A5;		
	}
	.night-hot-key{
		border: 1px solid #6F7379;
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
	.night-delete{
		opacity: 0.8;
	}
</style>
