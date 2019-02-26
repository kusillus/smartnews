<template>
  <div id="app">
    <Loader v-show="showLoader"/>
    <transition name="fade">
      <SplashScreen v-show="showSplash" v-on:changeSplashStatus="changeSplashStatus"/>
    </transition>
    <router-view/>
  </div>
</template>

<script>
import SplashScreen from '@/components/SplashScreen.vue'
import Loader from '@/components/Loader.vue'

export default {
  data() {
    return {
      showSplash: true
    }
  },
  computed: {
    showLoader: function () {
      console.log(this.$store.state.showLoader)
      return this.$store.state.showLoader
    }
  },
  mounted() {
    if(!localStorage.login) {
      if(this.$router.currentRoute.path !== '/login') {
        this.$router.push('/login')
      }
    }
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
    SplashScreen,
    Loader
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
