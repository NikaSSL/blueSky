

<!-- 我栏目——收藏与历史页面 -->

<template>
	<div>
		<header class="fixed">
			<div :class="['block',darkState?'night-bg':'day-bg']"></div>
			<div :class="['header-box',darkState?'night-header-box':'day-header-box']">
				<router-link :class="['back',darkState?'night-back':'day-back']" to="/me" @click.native="showBottom"></router-link>
				<div class="center-box">
					<div class="big-word">
						<router-link to="/collectHistory/list" :class="[darkState?inCollect?'night-choosed':'night-unchoose':inCollect?'day-choosed':'day-unchoose']" @click.native="inCollectFn">收藏</router-link>
					</div>
					<div class="big-word">
						<router-link to="/collectHistory/list" :class="[darkState?inCollect?'night-unchoose':'night-choosed':inCollect?'day-unchoose':'day-choosed']" @click.native="inHistoryFn">历史</router-link>
					</div>			
				</div>
				<div v-show="!editState" :class="['samll-word',darkState?'night-small-word':'day-small-word']" @click="edit">编辑</div>
				<div v-show="editState":class="['samll-word',darkState?'night-small-word':'day-small-word']" @click="cancel">取消</div>				
			</div>
		</header>
		<router-view></router-view>
		<footer v-show="editState" :class="['footer-box',darkState?'night-footer-box':'day-footer-box']">
			<div @click="chooseAllFn">全选</div>
			<div>删除</div>
		</footer>
	</div>
</template>

<script>
	export default{
		name:'collectHistory',
		computed:{
			darkState:function(){
				return this.$store.state.darkState;
			},
			editState:function(){
				return this.$store.state.editState;
			},
			inCollect:function(){
				return this.$store.state.inCollect;
			}
		},
		methods:{
			showBottom:function(){
				this.$store.dispatch('inIndex');
				this.cancel();
			},
			edit:function(){
				this.$store.dispatch('inEdit');
			},
			cancel:function(){
				this.$store.dispatch('outEdit');
				this.$store.dispatch('resetChooseAll');
			},
			chooseAllFn:function(){
				this.$store.dispatch('inChooseAll');
			},
			inCollectFn:function(){
				this.$store.dispatch('inCollect');
				this.cancel();
			},
			inHistoryFn:function(){
				this.$store.dispatch('inHistory');
				this.cancel();
			}
		}
	}
</script>

<style scoped>
	.fixed{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}
	.block{
		width: 100%;
		height: 0.4rem;
	}
	.day-bg{
		background-color: #FFFFFF;
	}
	.night-bg{
		background-color: #181A1D;
	}

	.header-box{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 0.9rem;
		padding-left: 0.3rem;
		padding-right: 0.3rem;		
		font-size: 0.32rem;
	}
	.day-header-box{
		border-bottom: 1px solid #E2E4E6;
	}
	.night-header-box{
		border-bottom: 1px solid #2A2A30;
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
		background-image: url("../assets/4_icon_back.png");
	}
	.night-back{
		background-image: url("../assets/48_dark_back.png");
	}
	.samll-word{
		font-size: 0.28rem;
	}
	.day-small-word{
		color: #333333;
	}
	.night-small-word{
		color: #6F7379;
	}
	.big-word{
		font-size: 0.32rem;
		padding-left: 0.25rem;
		padding-right: 0.25rem;
	}
	.footer-box{
		width: 100%;
		height: 0.9rem;
		font-size: 32px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 0.3rem;
		padding-right: 0.3rem;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	.day-footer-box{
		background-color: #008BFF;
		color: #FFFFFF;
	}
	.night-footer-box{
		background-color:  #2A2A30;
		color: #A2A4A6;
	}
	.day-choosed{
		color: #008BFF;
	}
	.night-choosed{
		color: #A2A4A6;
	}
	.day-unchoose{
		color: #A5A5A5;
	}
	.night-unchoose{
		color: #6F7379;
	}

</style>