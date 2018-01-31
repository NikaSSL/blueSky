<template>
	<div>
		<div class="header-box">
			<span class="header-title">我的</span>
		</div>
		<me-login></me-login>
		<me-collect></me-collect>
		<me-config></me-config>
		<me-config2></me-config2>
	</div>
</template>

<script>
import MeLogin from '../components/meLogin.vue'
import MeCollect from '../components/meCollect.vue'
import MeConfig from '../components/meConfig.vue'
import MeConfig2 from '../components/meConfig2.vue'
export default{
	name:'me',
	components:{
		MeLogin,
		MeCollect,
		MeConfig,
		MeConfig2
	},
	created(){
		//vuex设置状态，改变class
		this.$store.dispatch("inMe");
	}
}
</script>

<style scoped>
	.header-title{
		display: block;
		width: 100%;
		height: 1.31rem;
		text-align: center;
		font-weight: bold;
		font-size: 0.32rem;
		border-bottom: 1px solid #E2E4E6;;
		padding-top: 0.6rem;
	}
	.header-box{
		width: 100%;
		background-color: #FFFFFF;
	}
</style>