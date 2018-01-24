
<!-- 首页头部导航组件 -->

<template>
	<div class="header-box">
		<span class="header-title">{{headText}}</span>
		<router-link to="/search" @click.native="hideBottom">
			<i class="search"></i>					
		</router-link>		
	</div>
</template>

<script>
	export default{
		name: "headBan",
		props:{
			headText:{
				default:'新闻'
			}
		},
		methods:{
			hideBottom:function(){//隐藏首页底部导航
				this.$store.dispatch('outIndex');
			}
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
	.header-box{
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		background-color: #FFFFFF;
		z-index: 999;
	}
	.search{
		display: block;
		position: fixed;
		top: 24px;
		right: 15px;
		background-image: url("../assets/3_icon_search.png");
		background-size: 100%;
		background-repeat: no-repeat;
		width: 16px;
		height: 16px;
	}
</style>