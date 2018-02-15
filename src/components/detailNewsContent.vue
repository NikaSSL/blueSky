
<script>
	export default{
		name:'newsContent',
		data(){
			return {
				myShowImg:this.showImg,//showImg副本
				myNowSrc:this.nowSrc
			}
		},
		watch:{
			showImg(val){
				this.myShowImg = val;
			},
			myShowImg(val){
				this.$emit('on-show-change',val);
			},
			myNowSrc(val){
				this.$emit('on-src-change',val);
			}
		},
		computed:{
			newContent:function(){
				return this.$store.state.newInfo.content?this.$store.state.newInfo.content:[]
			},
			darkState:function(){
				return this.$store.state.darkState;
			}
		},
		props:{
			showImg:{
				type:Boolean,
				default:false
			}
		},
		render(createElement){
			let arr = [];
			this.newContent.forEach(item => {
				if(this.darkState){
					if(item.type === 'image'){
						arr.push(createElement('img',{
							attrs:{
								src: item.text,
								class:'content-img night-img'
							}
						}));
					}else if(item.type != 'h1'){//多余的标题，省略
						arr.push(createElement(item.type,{
							attrs:{
								class:'night-word'
							}
						},item.text));
					}
				}else{
					if(item.type === 'image'){
						arr.push(createElement('img',{
							attrs:{
								class:'content-img'
							},
							directives:[
							{
								name:'lazyload',
								value:item.text
							}],
							on:{
								click:()=>{//查看图片
									this.myShowImg = true;
									this.myNowSrc = item.text;
								}
							}
						}));
					}else if(item.type != 'h1'){//多余的标题，省略
						arr.push(createElement(item.type,item.text));
					}
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
	}
	.night-img{
		opacity: .8;
	}
	p{
		font-size: 0.32rem;
		letter-spacing: 0.006rem;
		line-height: 0.48rem;
	}
	.night-word{
		color: #A2A4A6;	
	}
	.content-box{
		margin-bottom: 55px;
	}
</style>