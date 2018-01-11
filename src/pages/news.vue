<template>
	<div>
		<head-ban></head-ban>
		<news-new></news-new>		
	</div>
</template>

<script>
import HeadBan from '../components/header.vue'
import NewsNew from '../components/newsNew.vue'
	export default{
		name:'news',
		components:{
			HeadBan,
			NewsNew
		},
		created(){
			//vuex设置状态，改变class
			this.$store.dispatch("inNews");
		}
	}
</script>