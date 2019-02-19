<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src

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
    HelloWorld,
  }
}
</script>

<style lang="scss" scoped>

</style>

