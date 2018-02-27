<!-- 滑动开关组件 -->

<template>
	<label class="switch-btn">
		<input type="checkbox" class="checked-switch" @click="toggleDark">
		<span class="text-switch" data-yes="" data-no=""></span>
		<span class="toggle-btn"></span>
	</label>
</template>

<script>
	export default{
		name: 'switchBtn',
		methods:{
			toggleDark(){
				this.$store.dispatch('toggleDark')
			}
		}
	}
</script>

<style scoped>
	.switch-btn {
	  position: relative; 
	  display: block; 
	  vertical-align: top; 
	  width: .51rem; 
	  height: .3rem; 
	  border-radius: .18rem; 
	  cursor: pointer;
	}
	.checked-switch {
	  position: absolute; 
	  top: 0; 
	  left: 0; 
	  opacity: 0;
	}  
	.text-switch {
	  background-color: #ed5b49; 
	  border: 1px solid #d2402e; 
	  border-radius: inherit; 
	  color: #fff; 
	  display: block; 
	  font-size: 15px; 
	  height: inherit; 
	  position: relative; 
	  text-transform: uppercase;
	}

	.switch-btn {
	  position: relative; 
	  display: block; 
	  vertical-align: top; 
	  width: .51rem; 
	  height: .3rem; 
	  border-radius: .18rem; 
	  cursor: pointer;
	}                

	.checked-switch {
	  position: absolute; 
	  top: 0; 
	  left: 0; 
	  opacity: 0;
	}               
	.text-switch {
	  background-color: #4FD262;
	  border: 0;
	  border-radius: inherit; 
	  color: #fff; 
	  display: block; 
	  font-size: 15px; 
	  height: inherit; 
	  position: relative; 
	  text-transform: uppercase;
	}                 
	.text-switch:before, 
	.text-switch:after {
	  position: absolute; 
	  top: 50%; 
	  margin-top: -.5em; 
	  line-height: 1; 
	  -webkit-transition: inherit; 
	  -moz-transition: inherit; 
	  -o-transition: inherit; 
	  transition: inherit;
	}
	.text-switch:before {
	  content: attr(data-no); 
	  right: 11px;
	}
	.text-switch:after {
	  content: attr(data-yes); 
	  left: 11px; 
	  color: #FFFFFF; 
	  opacity: 0;
	}   
	.checked-switch:checked ~ .text-switch {
	  background-color: #A5A5A5; 
	  border: 0;
	}
	.checked-switch:checked ~ .text-switch:before {
	  opacity: 0;
	}
	.checked-switch:checked ~ .text-switch:after {
	  opacity: 1;
	} 
	.toggle-btn {
	  background: linear-gradient(#eee, #fafafa); 
	  border-radius: 100%; 
	  height: .28rem;
	  width: .28rem;
	  left: 1px; 
	  position: absolute; 
	  top: 1px; 
	}
	.toggle-btn::before {
	  color: #aaaaaa; 
	  content: ""; 
	  display: inline-block; 
	  font-size: 12px; 
	  letter-spacing: -2px; 
	  padding: 4px 0; 
	  vertical-align: middle;
	}
	.checked-switch:checked ~ .toggle-btn {
	  left: .25rem;
	}
	 .text-switch, .toggle-btn {
	  transition: All 0.3s ease; 
	  -webkit-transition: All 0.3s ease; 
	  -moz-transition: All 0.3s ease;
	  -o-transition: All 0.3s ease;
	}   
</style>