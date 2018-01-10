<template>
	<div>
		<slot name="icon"></slot>
		<span>{{msg}}</span>
	</div>
</template>

<script>
	export default{
		props:{
			msg:{
				default:'我'
			}
		}
	}
</script>

<style scoped>
	
</style>