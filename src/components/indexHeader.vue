
<!-- 头部导航组件 -->

<template>
	<div>
		<span class="header-title">{{headText}}</span>
		<search-info></search-info>
	</div>
</template>

<script>
import SearchInfo from '../components/search.vue'
	export default{
		name: "headBan",
		props:{
			headText:{
				default:'新闻'
			}
		},
		components:{
			SearchInfo
		}
	}
</script>

<style scoped>
	.header-title{
		display: block;
		width: 100%;
		height: 64px;
		text-align: center;
		line-height: 64px;
		font-weight: bold;
		font-size: 16px;
		border-bottom: 1px solid #F0F1F2;
	}
</style>