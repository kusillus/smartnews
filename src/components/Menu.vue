<template>
  <div class="menu-bar justify-between align-center">
    <img @click="goHome" class="img_menu" :src="logo_white" alt="">
    <i @click="goUserAccount" v-html="svgUser"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo_white: require('@/assets/logo_white.svg'),
      svgUser: '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="white" d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" /></svg>'
    }
  },
  methods: {
    goHome: function() {
      let vm = this
      vm.$router.push('/')
    },
    goUserAccount: function() {
      let vm = this
      vm.$router.push('/account')
    }
  }  
}
</script>

<style lang="scss">
@import '../styles/default.scss';

.menu-bar{
  padding: 10px 20px;
  background-image: linear-gradient(120deg, map-get($COLORS,orange), map-get($COLORS,fuchsia));
}
.img_menu{
  width: 25px;
  height: 25px;
  transform: rotate(30deg);
}

</style>

