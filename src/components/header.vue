
<!-- 头部导航组件 -->

<template>
	<div>
		<h2>{{headText}}</h2>
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