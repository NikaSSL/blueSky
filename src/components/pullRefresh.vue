<template lang="html">
<!--     <div class="yo-scroll" :class="{'down':(state===0),'up':(state==1),'refresh':(state===2),touch:touching}" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)"> -->
        <div class="yo-scroll" :class="{touch:touching}" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
        <section class="inner" :style="{ transform: 'translate3d(0, ' + top + 'px, 0)' }">
            <div class="pull-refresh">
<!--            <span class="down-tip">下拉刷新</span>
                <span class="up-tip">松开刷新数据</span>
                <span class="refresh-tip">加载中……</span> -->
                <span class="pull-tip" v-show="state===2||state===1">下拉刷新</span>
                <span :class="['refresh-tip',darkState?'night-refresh-tip':'day-refresh-tip']" v-show="state===3 && newsNum!=0">更新了{{newsNum}}条内容</span>
                <span :class="['refresh-tip',darkState?'night-refresh-tip':'day-refresh-tip']" v-show="state===3 && newsNum===0">暂无更新内容</span>
            </div>
            <slot>
            </slot>
            <div class="load-more" v-show="downFlag">
                <!-- <span v-show="downFlag === false">上拉加载更多</span> -->
                <div class="refresh-img"></div><div class="loading-tip">正在刷新</div>
            </div>                
            <div class="load-tip" v-show="dataList.noFlag">暂无更多数据</div>
        </section>
    </div>
</template>

<script>
    export default {
        props: {
            offset: {
                type: Number,
                default: 20 //默认高度
            },
            enableInfinite: {
                type: Boolean,
                default: true
            },
            enableRefresh: {
                type: Boolean,
                default: true
            },
            dataList: {
                default: false,
                required: false
            },
            onRefresh: {
                type: Function,
                default: undefined,
                required: false
            },
            onInfinite: {
                type: Function,
                default: undefined,
                require: false
            },
            newsNum:{
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                top: 0,
                state: 0,//0表下拉前，1表下拉时，2表加载中，3表加载后
                startX: 0,
                startY: 0,
                touching: false,
                infiniteLoading: false,
                downFlag: false, //用来显示是否加载中
            }
        },
        computed:{
            darkState:function(){
                return this.$store.state.darkState;
            }
        },
        methods: {
            touchStart(e) {
                this.startY = e.targetTouches[0].pageY;
                this.startX = e.targetTouches[0].pageX;
                this.startScroll = this.$el.scrollTop || 0;
                this.touching = true; //留着有用，不能删除

                this.dataList.noFlag = false;
                this.$el.querySelector('.load-more').style.display = 'flex';
            },
            touchMove(e) {
                if(!this.enableRefresh || this.dataList.noFlag || !this.touching) {
                    return
                }
                let diff = e.targetTouches[0].pageY - this.startY - this.startScroll
                if(diff > 0) e.preventDefault()
                this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0)
                if(this.state === 2) { // in refreshing
                    return
                }
                if(this.top >= this.offset) {
                    this.state = 1
                } else {
                    this.state = 0
                }

                let more = this.$el.querySelector('.load-more');
                if(!this.top && this.state === 0) {
                    more.style.display = 'flex';
                } else {
                    more.style.display = 'none';
                }
            },
            touchEnd(e) {

                if(!this.enableRefresh) {
                    return
                }
                this.touching = false
                if(this.state === 2) { // in refreshing
                    this.state = 2
                    this.top = this.offset
                    return
                }
                if(this.top >= this.offset) { // do refresh
                    this.refresh()
                } else { // cancel refresh
                    this.state = 0
                    this.top = 0
                }

                //用于判断滑动是否在原地 ----begin
                let endX = e.changedTouches[0].pageX,
                    endY = e.changedTouches[0].pageY,
                    dy = this.startY - endY,
                    dx = endX - this.startX;

                //如果滑动距离太短  
                if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {
                    console.log("滑动距离太短")
                    return;
                }

                //--------end--------

                if(!this.enableInfinite || this.infiniteLoading) {
                    return
                }

                let outerHeight = this.$el.clientHeight,
                    innerHeight = this.$el.querySelector('.inner').clientHeight,
                    scrollTop = this.$el.scrollTop,
                    ptrHeight = this.onRefresh ? this.$el.querySelector('.pull-refresh').clientHeight : 0,
                    bottom = innerHeight - outerHeight - scrollTop - ptrHeight;

                console.log(bottom + " __ " + this.offset)

                if(bottom <= this.offset && this.state === 0) {
                    this.downFlag = true;
                    this.infinite();
                } else {
                    this.$el.querySelector('.load-more').style.display = 'none';
                    this.downFlag = false;
                }

            },
            refresh() {
                this.state = 2;
                this.top = this.offset;
                setTimeout(() => {
                    this.onRefresh(this.refreshDone)
                }, 1000);
            },
            refreshDone() {
                this.top = 0
                this.state = 3
                setTimeout(() => {
                    this.state = 0
                },1500);
            },
            infinite() {
                this.infiniteLoading = true

                setTimeout(() => {
                    this.onInfinite(this.infiniteDone);
                }, 2000);
            },
            infiniteDone() {
                this.infiniteLoading = false
            }
        }
    }
</script>

<style scoped>
    .yo-scroll {
        font-size: 0.3rem;
        text-align: center;
        -webkit-overflow-scrolling: touch;
    }
    .load-more {
        height: 1rem;
        line-height: 1rem;
        display: none;
    }
    .nullData {
        font-size: 26px;
        color: #999999;
        height: 100px;
        line-height: 80px;
        text-align: center;
    }
    .yo-scroll.touch .inner {
        transition-duration: 0;
    }
    .refresh-tip{
        width: 100%;
        height: 0.7rem;
        line-height: 0.7rem;
        display: block;
    }
    .day-refresh-tip{
        background-color: #008BFF;
        color: #F8F8F8;
    }
    .night-refresh-tip{
        background-color: #1C4872;
        color: #A2A4A6;;
    }
    .pull-tip{
        width: 100%;
        height: 0.7rem;
        line-height: 0.7rem;
        display: block;
        color: #A5A5A5;
    }
    .load-more{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #A5A5A5;
    }
    .refresh-img{
        background-image: url("../assets/11_up_renovate.png");
        background-size: 100%;
        background-repeat: no-repeat;
        width: 0.4rem;
        height: 0.4rem;
    }
    .load-tip{
        height: 0.7rem;
        line-height: 0.7rem;
        color: #A5A5A5;
    }

    .c-box{
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>