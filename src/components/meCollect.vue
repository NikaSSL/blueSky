
<!-- Me页面中收藏与历史组件 -->

<template>
<div :class="['container-fluid','collect-box',darkState?'night-box':'']">
	<div class="row">
		<div class="col-xs-12 word-style">
			<router-link to="/collectHistory/history" @click.native="hideFooter">
				<i :class="['collect-btn',darkState?'night-btn':'']"></i>	
			</router-link>
			<span>收藏与历史</span>
		</div>
	</div>
</div>

</template>

<script>
	export default{
		name:'meCollect',
		computed:{
			darkState:function(){
				return this.$store.state.darkState;
			}
		},
		methods:{
			hideFooter:function(){
				this.$store.dispatch('outIndex');
			}
		}
	}
</script>


<style scoped>
	.collect-btn{
		width: 1.1rem;
		height: 1.1rem;
		display: block;
		background-image: url("../assets/24_collection.png");
		background-repeat: no-repeat;
		background-size: 100%;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 0.1rem;
	}
	.night-btn{
		opacity: 0.5;
	}
	.word-style{
		text-align: center;
		font-size: 0.24rem;
	}
	.collect-box{
		width: 100%;
		height: 1.86rem;
	}
	.night-box{
		color: #A2A4A6;
	}
</style>