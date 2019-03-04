<template>
  <div class="bg-principal" @click="changeSplashStatus">
    <img :src="logo_white" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo_white: require('@/assets/logo_white.svg')
    }
  },
  methods: {
    changeSplashStatus: function() {
      this.$emit('changeSplashStatus')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/default.scss';
.bg-principal{
  width: 100%;
  height: 100vh;
  position: fixed;
  top:0;
  left: 0;
  background-image: url('../assets/bg_home.jpg'),linear-gradient(120deg, map-get($COLORS,orange), map-get($COLORS,fuchsia));
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-blend-mode: soft-light;
  z-index: 9;
  img{
    transform: rotate(30deg);
  }
}

// #FF8C00
// #FF0080

</style>
