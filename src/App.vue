<template>
  <div id="app">
    <transition name="fade">
      <SplashScreen v-show="showSplash" v-on:changeSplashStatus="changeSplashStatus"/>
    </transition>
    <router-view/>
  </div>
</template>

<script>
import SplashScreen from '@/components/SplashScreen.vue'

export default {
  data() {
    return {
      showSplash: true
    }
  },
  mounted() {
    document.onreadystatechange = () => { 
      if (document.readyState == "complete") { 
        setTimeout( () => {
          this.showSplash = false
        }, 500)
        
      } 
    }
  },
  methods: {
    changeSplashStatus: function() {
      this.showSplash = false
    }
  },
  components: {
    SplashScreen
  }
}
</script>


<style lang="scss">
@import './styles/reset.css';
@import './styles/default.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: map-get($COLORS,text);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
