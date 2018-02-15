
<!-- collect & history 通用单项组件 -->

<template>
	<div class="outer-box">
		<router-link to="/newDetail">

			<div class="content-box" v-if="item.image.position==='right'">
				<div :class="['check',editState?choose?'checked':darkState?'night-uncheck':'day-uncheck':'hidden']" @click="clickFn"></div>
				<div class="inner-box right-box">
					<div :class="['item-title',darkState?editState?'night-item-title item-edit-title':'night-item-title item-unedit-title':editState?'day-item-title item-edit-title':'day-item-title item-unedit-title']">{{item.titile}}</div>
					<div :class="[darkState?'night-item-footer':'day-item-footer']">
						<span>{{dateTme}}</span>
						<span>{{item.source}}</span>
					</div>
				</div>
				<div class="img-box">
					<!-- <img :src="item.image.url" class="samll-img"> -->
					<img v-lazyload="item.image.url" class="samll-img">
				</div>
			</div>

			<div class="content-box" v-else>
				<div :class="['check',editState?choose?'checked':darkState?'night-uncheck':'day-uncheck':'hidden']" @click="clickFn"></div>
				<div :class="['inner-box',editState?'block-edit-box':'block-unedit-box']">
					<div :class="['item-title','block-item-title',darkState?'night-item-title':'day-item-title']">{{item.titile}}</div>
					<div class="img-box">
						<!-- <img :src="item.image.url" class="big-img"> -->
						<img v-lazyload="item.image.url" class="big-img">
					</div>
					<div :class="[darkState?'night-item-footer':'day-item-footer']">
						<span>{{item.dateTme}}</span>
						<span>{{item.source}}</span>
					</div>			
				</div>

			</div>
			
		</router-link>
		<div :class="['line',darkState?'night-line':'day-line']"></div>		
	</div>
</template>

<script>
	export default{
		name:'commonItem',
		props:['item'],
		data(){
			return {
				selfChoose:this.$store.state.chooseAll.state
			}
		},
		computed:{
			darkState:function(){
				return this.$store.state.darkState;
			},
			editState:function(){
				return this.$store.state.editState;
			},
			dateTme:function(){
				return this.item.dateTme.split(' ')[0];
			},
			chooseAll(){
				return this.$store.state.chooseAll
			},
			choose:function(){
				if (this.$store.state.chooseAll.new) {//当chooseAll数据为新数据
					this.selfChoose = this.$store.state.chooseAll.state;
				}
				return this.selfChoose;
			}
		},
		methods:{
			clickFn(){
				if (this.$store.state.chooseAll.new) {//修改最新choose状态时
					this.$store.dispatch('oldChooseAll')
				}
				this.selfChoose = !this.selfChoose;
			}
		}
	}
</script>

<style scoped>
	.content-box{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0.3rem;
		font-size: 0.22rem;
	}
	.day-small-word{
		color: #A5A5A5;
	}
	.night-small-word{
		color: #6F7379;
	}
	.inner-box{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.item-title{
		font-size: 0.32rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp:2;
	}
	.item-edit-title{
		width: 3.56rem;
	}
	.item-unedit-title{
		width: 4.53rem;
	}
	.day-item-title{
		color: #333333;
	}
	.night-item-title{
		color: #A2A4A6;
	}
	.line{
		width: 96%;
		height: 1px;
		margin-left: 4%;
	}
	.day-line{
		background-color: #E2E4E6;
	}
	.night-line{
		background-color: #2A2A30;
	}
	.check{
		width: 0.46rem;
		height: 0.46rem;
	}
	.day-uncheck{
		border: 1px solid #979797;
		background-color: #FFFFFF;
		border-radius: 50%;
	}
	.night-uncheck{
		background: #181A1D;
		border: 1px solid #979797;
		border-radius: 50%;
	}
	.checked{
		background-image: url('../assets/7_choose.png');
	}
	.samll-img{
		width: 2rem;
		height: 1.5rem;
	}
	.block-unedit-box .big-img{
		width: 6.9rem;
		margin-top: 0.3rem;
		margin-bottom: 0.05rem;
	}
	.block-edit-box{
		width: 5.85rem;
	}
	.block-edit-box .big-img{
		width: 5.85rem;
		margin-top: 0.3rem;
		margin-bottom: 0.05rem;
	}
	.hidden{
		display: none;
	}
	.right-box{
		height: 1.5rem;
	}
	.day-item-footer{
		color:  #A5A5A5;
	}
	.night-item-footer{
		color: #6F7379;
	}
</style>