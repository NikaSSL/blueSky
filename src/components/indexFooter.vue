
<!-- 底部导航组件 -->

<template>
	<div :class="['container-fluid','nav-box',darkState?'default-night night-box':'default-day day-box']">
		<div class="row">
			<div class="col-xs-4">
				<router-link :class="['nav-item',news?'black':'grey',darkState?'default-night':'default-day']" to="/newList">
					<i v-if="darkState" :class="[news?'night-news1':'night-news2']"></i>
					<i v-else :class="[news?'day-news1':'day-news2']"></i>
					<span>新闻</span>
				</router-link>
			</div>
			<div class="col-xs-4">
				<router-link :class="['nav-item',orders?'black':'grey',darkState?'default-night':'default-day']" to="/orders">
					<i v-if="darkState" :class="[orders?'night-orders1':'night-orders2']"></i>
					<i v-else :class="[orders?'day-orders1':'day-orders2']"></i>
					<span>订阅</span>
				</router-link>
			</div>
			<div class="col-xs-4">
				<router-link :class="['nav-item',me?'black':'grey',darkState?'default-night':'default-day']" to="/me">
					<i v-if="darkState" :class="[me?'night-me1':'night-me2']"></i>
					<i v-else :class="[me?'day-me1':'day-me2']"></i>
					<span>我</span>
				</router-link>
			</div>
		</div>	
	</div>
</template>

<script>
	export default{
		name:"footerTab",
		data(){
			return{}
		},
		computed:{
			news(){
				return this.$store.state.news;
			},
			orders(){
				return this.$store.state.orders;
			},
			me(){
				return this.$store.state.me;
			},
			darkState:function(){
				return this.$store.state.darkState;
			}	
		}
	}
</script>

<style scoped>
    .nav-box{
        position: fixed;
        height: 1rem;
        width: 100%;
        bottom: 0;
        left: 0;
        font-size: 0.22rem;
    }
    .day-box{    	
        border-top: 1px solid #f0f0f0;
	}
    .night-box{
    	border-top: 1px solid #2A2A30;
    }
	.grey{
	    color: #A5A5A5;	
	}
	.black{
		color: #333;
	}
    .nav-item{
	    flex:1;
	    height:0.6rem;
	    text-align:center;
	    display:block;
	    text-decoration:none;
	}
    i{
        width: 0.4rem;
        height: 100%;
        display: block;
        background-repeat: no-repeat;
        background-size: 120%;
        margin: 0 auto;
        background-position-y: center;
        background-position-x: center;
        position: relative;
    }
	.day-news1{
		background-image:url("../assets/8_icon_news_blue.png");		
	}
	.day-news2{
		background-image:url("../assets/8_icon_news_grey.png");
	}
	.night-news1{
		background-image:url("../assets/41_dark_news1.png");				
	}
	.night-news2{
		background-image:url("../assets/41_dark_news2.png");		
	}
	.day-orders1{
		background-image:url("../assets/9_icon_order_blue.png");
	}
	.day-orders2{
		background-image:url("../assets/9_icon_order_grey.png");
	}
	.night-orders1{
		background-image:url("../assets/42_dark_order1.png");
	}
	.night-orders2{
		background-image:url("../assets/42_dark_order2.png");
	}
	.day-me1{
		background-image:url("../assets/10_icon_me_blue.png");
	}
	.day-me2{
		background-image:url("../assets/10_icon_me_grey.png");
	}
	.night-me1{
		background-image:url("../assets/43_dark_me1.png");
	}
	.night-me2{
		background-image:url("../assets/43_dark_me2.png");
	}
    .default-night{
    	background: #181A1D;
    	color: #80858B;
    }
    .default-day{
    	background-color: #FFF;
    }
</style>