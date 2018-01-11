<template>
	<div>
		<h2>我的</h2>
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
	h2{
		font-size: 16px;
		color: #333333;
		height: 65px;
		width: 100%;
		text-align: center;
		margin: 0;
		line-height: 65px;
		border-bottom: 1px solid #f0f0f0;
	}
</style>