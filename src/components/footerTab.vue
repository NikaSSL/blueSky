<template>
	<div class="container-fluid nav-box">
		<div class="row">
			<div class="col-xs-4">
				<router-link class="nav-item" to="/news">
					<i :class="[news?'news1':'news']"></i>新闻
				</router-link>
			</div>
			<div class="col-xs-4">
				<router-link class="nav-item" to="/orders">
					<i :class="[orders?'orders1':'orders']"></i>订阅
				</router-link>
			</div>
			<div class="col-xs-4">
				<router-link class="nav-item" to="/me">
					<i :class="[me?'me1':'me']"></i>我
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
			}
		}
	}
</script>

<style scoped>
    .nav-box{
        position: fixed;
        height: 50px;
        width: 100%;
        bottom: 0;
        left: 0;
        background: #fff;
        border-top: 1px solid #f0f0f0;
    }

    .nav-item{
	    flex:1;
	    color: #000;
	    height:30px;
	    text-align:center;
	    display:block;
	    text-decoration:none;
	}
    i{
        width: 20px;
        height: 100%;
        display: block;
        background-repeat: no-repeat;
        background-size: 120%;
        margin: 0 auto;
        background-position-y: center;
        background-position-x: center;
        position: relative;
    }
	.news1{
		background-image:url("../assets/8_icon_news_blue.png");		
	}
	.news{
		background-image:url("../assets/8_icon_news_grey.png");
	}
	.orders1{
		background-image:url("../assets/9_icon_order_blue.png");
	}
	.orders{
		background-image:url("../assets/9_icon_order_grey.png");
	}
	.me1{
		background-image:url("../assets/10_icon_me_blue.png");
	}
	.me{
		background-image:url("../assets/10_icon_me_grey.png");
	}
</style>