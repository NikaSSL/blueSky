<template>
	<div>
		This is orders page
	</div>
</template>

<script>
	export default{
		name:'orders',
		componets:{},
		created(){
			//vuex设置状态，改变class
			this.$store.dispatch("inOrders");
		}
	}
</script>