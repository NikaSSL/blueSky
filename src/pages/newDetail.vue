
<!-- 新闻详细内容页面 -->

<template>
	<div>
		<div class="header">
			<i class="back"></i>
		</div>
		<detail-content></detail-content>
		<detail-bottom></detail-bottom>
	</div>
</template>


<script>
	import DetailBottom from '../components/detailBottom.vue'
	import DetailContent from '../components/detailNew.vue'
	export default{
		name:'newDetail',
		components:{
			DetailBottom,
			DetailContent
		},
		created(){
			this.$store.dispatch("inDetail");
		}
	}
</script>

<style scoped>
	.header{
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #E2E4E6;
		position: relative;
	}
	.back{
		background-image: url("../assets/4_icon_back.png");
		background-size: 100%;
		background-repeat: no-repeat;
		width: 16px;
		height: 16px;
		margin-left: 20px;
		display: block;
		position: absolute;
		top: 50%;
		margin-top: -8px;
	}
</style>