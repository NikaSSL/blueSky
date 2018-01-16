<template>
  <div id="app">
    <router-view/>
    <footer-tab v-if="index"></footer-tab>
  </div>
</template>

<script>
import FooterTab from './components/footerTab.vue'
import store from './vuex/store'
export default {
  name: 'app',
  store,
  data(){
    return {
      msg:'welcome'
    }
  },
  components:{
    FooterTab
  },
  computed:{
    index(){
      return this.$store.state.index;
    }
  }
}
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: '.PingFangSC-Semibold';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
