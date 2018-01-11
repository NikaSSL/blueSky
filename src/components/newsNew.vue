

<template>
	<div class="container">
		<h2>hh</h2>
<!-- 		<div class="row">
			<div class="col-xs-8">
				<h4>{{title}}</h4>
				<span v-if="top">置顶</span>
				<span>{{dateTime}}</span>
				<span>{{source}}</span>
				<span>{{count}}</span>
				<span>{{thumbUp}}</span>
			</div>
			<div class="col-xs-4">
				<i class="new-img"></i>
			</div>
		</div> -->
	</div>
</template>   

<script>
	export default{
		name:'newsNew',
		methods:{
			getData(){
				//获取JSON数据
				this.$ajax.get("/newsList").then((response) => {
					console.log(response.data);//需要这样获取到数组
				});
			}
		},
		mounted(){
			this.getData();
		}
	}
</script>