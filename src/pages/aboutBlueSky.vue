<template>
	<div class="outer-box">
		<div class="header">
			<router-link class="back" to="/me" @click.native="showFooter"></router-link>
			<span class="head-title">关于蓝琼</span>
		</div>
		<div class="content">
			<p>蓝穹新闻订阅APP是一款新闻定向推送及订阅类的APP。</p>
			<p class="indentation">2016年12月1日，中国保监会发文批准招商局仁和人寿保险股份有限公司筹建。注册资本人民币50亿元，注册地深圳市。拟任董事长李建红，拟任总经理彭伟。</p>
			<p>招商局仁和人寿保险股份有限公司筹备组：</p>
			<p>你筹备组关于筹建招商局仁和人寿保险股份有限公司的申请及相关补正材料收悉。经研究，现批复如下：</p>
			<p>一、同意深圳市招融投资控股有限公司、中国移动通信集团公司、中国民航信息网络股份有限公司、深圳市投资控股有限公司、深圳市卓越创业投资有限责任公司、深圳光汇石油集团股份有限公司、深圳市前海金融控股有限公司、亿赞普（北京）科技有限公司等8家公司共同发起筹建招商局仁和人寿保险股份有限公司，注册资本人民币50亿元，注册地深圳市。拟任董事长李建红，拟任总经理彭伟。</p>
			<p>二、你筹备组应当自收到批准筹建通知之日起1年内完成筹建工作，筹建期间不得从事保险经营活动，未经批准不得变更投资人、拟任董事长和拟任总经理。</p>
			<p>三、你筹备组应当严格依照有关法律法规办理筹建事宜，并将筹建过程中的有关情况及时报告我会。</p>
			<p>四、筹建完毕，你筹备组应当及时上报开业申请。在我会验收合格并下达开业批复后，再到工商部门注册登记。</p>
			<div class="pic-box">
				<img src="../assets/29_img.png" class="content-img">
				<span class="img-title1">照片1</span>
				<span class="img-title2">招商局仁和人寿保险股份有限公司</span>				
			</div>
			<div class="pic-box">
				<img src="../assets/30_img.png" class="content-img">
				<span class="img-title1">照片2</span>
				<span class="img-title2">招商局仁和人寿保险股份有限公司</span>
			</div>
			<div class="pic-box">
				<img src="../assets/31_img.png" class="content-img">
				<span class="img-title1">照片3</span>
				<span class="img-title2">招商局仁和人寿保险股份有限公司</span>
			</div>
			<div class="pic-box">
				<img src="../assets/32_img.png" class="content-img">
				<span class="img-title1">照片4</span>
				<span class="img-title2">招商局仁和人寿保险股份有限公司</span>
			</div>
		</div>
		<div class="footer">
			<div class="float-left">
			<div class="item line">
				<div class="item-title">联系我们</div>
				<span class="item-content">236687</span>
			</div>
			<div class="item line">
				<div class="item-title">更多联系方式</div>
			</div>				
			</div>
			<div class="item line float-left">
				<div class="item-title">关于公司</div>
				<ul class="item-content">
					<li>工作机会</li>
					<li>法律声明</li>
					<li>企业责任</li>
					<li>网站地图</li>
				</ul>
			</div>
			<div class="item">
				<div class="item-title">关注我们</div>
				<img src="../assets/20_share_wechat2.png" class="item-icn">
				<img src="../assets/21_share_sina.png" class="item-icn">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'aboutBlueSky',
		methods:{
			showFooter(){
				this.$store.dispatch('inIndex');
			}
		}
	}
</script>

<style scoped>

	/*通用样式*/
	.indentation{
		text-indent: 2em;
	}

	/*PC端样式*/
	@media (min-width: 1024px){
		.back{
			display: none;
		}
		.header{
			width: 100%;
			height: 0.625rem;
			border-bottom: 1px solid #E2E4E6;
			margin-bottom: 0.27rem;
		}
		.head-title{
			display: block;
			width: 100%;
			text-align: center;
			font-weight: bold;
			font-size: 0.21rem;
			color: #333333;
			padding-top: 0.21rem;
		}
		.content{
			width: 100%;
			padding-left: 2.5rem;
			padding-right: 2.5rem;
			font-size: 0.138rem;
			color: #333333;
		}
		.content:after{
			display: block;
			clear: both;
			content: "";
			visibility: hidden;
			height: 0;
		}
		.pic-box{
			float: left;
			padding-left: 0.1rem;
			padding-right: 0.1rem;
		}
		.content-img{
			display: block;
			width: 3.95rem;
			padding-top: 0.63rem;
			padding-bottom: 0.24rem;			
		}
		.img-title1{
			display: block;
			font-size: 0.33rem;
			color: #333333;					
		}
		.img-title2{
			display: block;
			font-size: 0.22rem;
			color: #333333;
			padding-bottom: -0.4rem;			
		}
		.footer{
			width: 100%;
			height: 2.4rem;
			background-color: #F1F3F5;
			margin-top: 1.317rem;
			padding-left: 2.86rem;
			padding-right: 2.86rem;

		}
		.item{
			padding-top: 0.4rem;
			padding-bottom: 0.2rem;
		}
		.item-title{
			font-size: 0.24rem;
			color: #333333;
		}
		.item-content{
			font-size: 0.22rem;
			color: #888888;
			padding-left: 0;
		}
		.item ul{
			list-style-type: none;
			text-align: center;
		}
		.item-icn{
			display: inline-block;
			width: 0.32rem;
			height: 0.32rem;
			margin-top: 0.16rem;
			margin-right: 0.16rem;
		}
		.float-left{
			float: left;
			padding-left: 0.8rem;
			padding-right: 0.8rem;
		}
	}

	/*移动端样式*/
	@media (max-width: 1023px){
		.header{
			width: 100%;
			height: 1.31rem;
			border-bottom: 1px solid #E2E4E6;
			position: fixed;
			top: 0;
			background-color: #FFFFFF;
			z-index: 2;
		}
		.head-title{
			display: block;
			width: 100%;
			height: 1.31rem;
			text-align: center;
			font-weight: bold;
			font-size: 0.32rem;
			padding-top: 0.6rem;
		}
		.back{
			background-image: url("../assets/4_icon_back.png");
			background-size: 100%;
			background-repeat: no-repeat;
			width: 0.32rem;
			height: 0.32rem;
			margin-left: 0.3rem;
			margin-top: 0.68rem;
			display: block;
			position: absolute;
		}
		.content{
			margin-top: 1.58rem;
			margin-left: 0.3rem;
			margin-right: 0.3rem;
			font-size: 0.24rem;
			color: #333333;
		}
		.content-img{
			display: block;
			width: 6.9rem;
			padding-top: 0.3rem;
			padding-bottom: 0.3rem;
		}
		.img-title1{
			display: block;
			font-size: 0.42rem;
			color: #333333;			
		}
		.img-title2{
			display: block;
			font-size: 0.28rem;
			color: #333333;
			padding-bottom: 0.2rem;
		}
		.footer{
			background-color: #F1F3F5;
			margin-top: 0.6rem;
		}
		.item{
			padding-top: 0.2rem;
			padding-bottom: 0.2rem;
			padding-left: 0.3rem;
		}
		.item-title{
			font-size: 0.3rem;
			color: #333333;
		}
		.item-content{
			font-size: 0.28rem;
			color: #888888;
			padding-left: 0;
		}
		.item ul{
			list-style-type: none;
		}
		.item-icn{
			display: inline-block;
			width: 0.4rem;
			height: 0.4rem;
			margin-top: 0.3rem;
			margin-right: 0.2rem;
		}
		.line{
			border-bottom: 1px solid #E2E4E6;
		}
	}
</style>