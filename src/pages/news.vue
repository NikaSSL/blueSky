<template>
	<div>
		This is news page
	</div>
</template>

<script>
	export default{
		name:'news',
		componets:{},
		created(){
			//vuex设置状态，改变class
			this.$store.dispatch("inNews");
		}
	}
</script>