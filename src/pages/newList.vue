
<!-- 新闻列表页面 -->

<template>
	<div class="outer-box">
		<head-ban :headText="headText" :searchState="searchState" ::backState="backState"></head-ban>
		<!-- 利用v-if判断是否加载 -->	
		<v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
			<new-item v-for="(item,index) in showData" v-if="item" :item="item" :key="index"></new-item>	
		</v-scroll>
	</div>
</template>

<script>
import HeadBan from '../components/indexHeader.vue'
import NewItem from '../components/newsListItem.vue'
import VScroll from '../components/pullRefresh.vue'
	export default{
		name:'news',
		components:{
			HeadBan,
			NewItem,
			VScroll
		},
		data:function(){
			return {
				newsList:[],
				headText:'新闻',
				searchState:true,
				backState:false,
				counter:2,//当前页数
				num:5,//一页显示的条数
				pageStart:0,//开始项数
				pageEnd:0,//结束项数
				newData:[],//下拉更新的数据
				showData:[],//展示的数据
				scrollData:{
					noFlag:false//暂无更多数据显示
				}
			}
		},
		created(){
			//vuex设置状态，改变class
			this.$store.dispatch("inNews");
		},
		methods:{
			getData(){
				//获取JSON数据
				this.$ajax.get("/api/newsList").then((response) => {
					this.newsList = response.data.data;
					this.showData = this.newsList.slice(this.num,this.num*2);
				});
			},
			getNewData(){
				this.newData = this.newsList.slice(0,this.num);
			},
			onRefresh(done){
				this.getNewData();
				//将更新的数据加入应显示数据数组中
				if(!this.showData || this.showData[0].id != this.newData[0].id){
					this.showData = this.newData.concat(this.showData);					
				}
				done();
			},
			onInfinite(done){
				++this.counter;

				let end = this.pageEnd = this.num * this.counter;
				let start = this.pageStart = this.pageEnd - this.num;
				let more = this.$el.querySelector('.load-more');

				for(start; start <  end ;start++){
					if (!this.newsList[start]) {//无更久远的数据
						more.style.display = 'none';
						this.scrollData.noFlag = true;
						break;
					}else{//加载最近的过去数据
						if(!this.newsList[start])break;
						this.showData.push(this.newsList[start]);
						more.style.display = 'none';
					}
				}
				done();
			}
		},
		mounted(){
			this.getData();
		}
	}
</script>

<style scoped>
	.outer-box{
		padding-top: 1.31rem;
		padding-bottom: 1rem;
	}
</style>