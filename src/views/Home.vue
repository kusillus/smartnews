<template>
  <div class="home">
    <Menu/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      // showLoading: true
    }
  },
  mounted: function (){
    console.log('load Component')
    //this.showLoading = false
  },
  methods: {
    
  },
  components: {
    Menu,
    HelloWorld,
  }
}
</script>

<style lang="scss" scoped>

</style>

