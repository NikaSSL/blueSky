
<!-- 首页头部导航组件 -->

<template>
	<div :class="['header-box',darkState?'default-night':'']">
		<span :class="['header-title',darkState?'night-line':'day-line']">{{headText}}</span>
		<router-link :class="['back',darkState?'back-night':'back-day']" :to="toWhere" v-show="backState" @click.native="showBottom"></router-link>	
		<router-link to="/search" @click.native="hideBottom" v-show="searchState">
			<i :class="['search',darkState?'search-night':'search-day']"></i>					
		</router-link>
	</div>
</template>

<script>
	export default{
		name: "headBan",
		props:{
			headText:{
				default:''
			},
			searchState:{
				default:false
			},
			backState:{
				default:false
			}
		},
		computed:{
			toWhere:function(){
				if (this.$store.state.news) {
					return '/newList'
				}else if (this.$store.state.orders) {
					return '/orders'
				} else {
					return '/me'
				}
			},
			darkState:function(){
				return this.$store.state.darkState;
			}			
		},
		methods:{
			hideBottom:function(){//隐藏首页底部导航
				this.$store.dispatch('outIndex');
			},
			showBottom:function(){
				this.$store.dispatch('inIndex');
			}
		}
	}
</script>

<style scoped>
	.header-box{
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		background-color: #FFFFFF;
		z-index: 2;
	}
	.default-night{
		background-color: #181A1D;
		color:  #A2A4A6;
	}
	.header-title{
		display: block;
		width: 100%;
		height: 1.31rem;
		text-align: center;
		font-weight: bold;
		font-size: 0.32rem;
		padding-top: 0.6rem;
	}
	.day-line{
		border-bottom: 1px solid #E2E4E6;
	}
	.night-line{
		border-bottom: 1px solid #2A2A30;
	}
	.search{
		display: block;
		position: fixed;
		top: 0.73rem;
		right: 0.32rem;
		background-size: 100%;
		background-repeat: no-repeat;
		width: 0.32rem;
		height: 0.32rem;		
	}
	.search-day{
		background-image: url("../assets/3_icon_search.png");
	}
	.search-night{
		background-image: url("../assets/40_dark_search.png");
	}
	.back{
		display: block;
		position: fixed;
		top: 0.68rem;
		left: 0.3rem;	
		background-size: 100%;
		background-repeat: no-repeat;
		width: 0.32rem;
		height: 0.32rem;
	}
	.back-day{
		background-image: url("../assets/48_dark_back.png");
	}
	.back-night{
		background-image: url("../assets/4_icon_back.png");
	}
</style>