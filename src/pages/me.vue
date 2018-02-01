
<template>
	<div>
		<head-ban :headText="headText" :searchState="searchState" :backState="backState"></head-ban>
 		<me-login></me-login>
		<me-collect></me-collect>
		<me-config></me-config>
		<me-config2></me-config2>
	</div>
</template>

<script>
import HeadBan from '../components/indexHeader.vue'
import MeLogin from '../components/meLogin.vue'
import MeCollect from '../components/meCollect.vue'
import MeConfig from '../components/meConfig.vue'
import MeConfig2 from '../components/meConfig2.vue'
export default{
	name:'me',
	data:function(){
		return {
			headText:'我的',
			searchState:false,
			backState:false
		}
	},
	components:{
		HeadBan,
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
