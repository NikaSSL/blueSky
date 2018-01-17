
<script>
	export default{
		name:'newsContent',
		props:{
			newContent: Array
		},
		render(createElement){
			let arr = [];
			this.newContent.forEach(item => {
				if(item.type === 'image'){
					arr.push(createElement('img',{
						attrs:{
							src: item.text,
							class:'content-img'
						}
					}));
				}else{
					arr.push(createElement(item.type,item.text));
				}
			});
			return createElement('div',arr);
		}
	}
</script>

<style scoped>
	.content-img{
		width: 345px;
		height: 135px;
	}
	p{
		font-size: 16px;
		color: #333333;
		letter-spacing: .5px;
		line-height: 24px;
	}
</style>