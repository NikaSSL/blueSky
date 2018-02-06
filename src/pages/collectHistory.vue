

<!-- 我栏目——收藏于历史页面 -->

<template>
	<div>
		<header class="header-box">
			<router-link :class="['back',darkState?'night-back':'day-back']" to="/me" @click.native="showBottom"></router-link>
			<div class="center-box">
				<div class="big-word">
					<router-link to="/collectHistory/collect">收藏</router-link>
				</div>
				<div class="big-word">
					<router-link to="/collectHistory/history">历史</router-link>
				</div>			
			</div>
			<div class="samll-word">编辑</div>
		</header>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:'collectHistory',
		computed:{
			darkState:function(){
				return this.$store.state.darkState;
			}
		}
	}
</script>

<style scoped>
	.header-box{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 0.9rem;
		margin-top: 0.4rem;
		padding-left: 0.3rem;
		padding-right: 0.3rem;
		border-bottom: 1px solid  #E2E4E6;
		font-size: 0.32rem;
	}
	.center-box{
		display: flex;
	}
	.back{
		display: block;
		background-size: 100%;
		background-repeat: no-repeat;
		width: 0.32rem;
		height: 0.32rem;
	}
	.day-back{
		background-image: url("../assets/48_dark_back.png");
	}
	.night-day{
		background-image: url("../assets/4_icon_back.png");
	}
	.samll-word{
		font-size: 0.28rem;
	}
	.big-word{
		font-size: 0.32rem;
		padding-left: 0.25rem;
		padding-right: 0.25rem;
	}
</style>