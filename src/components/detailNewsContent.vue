
<script>
	export default{
		name:'newsContent',
		computed:{
			newContent:function(){
				return this.$store.state.newInfo.content?this.$store.state.newInfo.content:[]
			}
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
				}else if(item.type != 'h1'){//多余的标题，省略
					arr.push(createElement(item.type,item.text));
				}
			});
			return createElement('div',{
				attrs:{
					class:'content-box'
				}
			},arr);
		}
	}
</script>

<style scoped>
	.content-img{
		width: 6.9rem;
		height: 2.7rem;
	}
	p{
		font-size: 0.32rem;
		color: #333333;
		letter-spacing: 0.006rem;
		line-height: 0.48rem;
	}
	.content-box{
		margin-bottom: 55px;
	}
</style>