<template>
  <div class="py5 wrapper_login">
    <div class="container_logo py3">
      <img :src="logo" alt="imagen">
      <div>
        <span class="text_logo">
          SmartNews
        </span>
      </div>
    </div>
    <div class="w100">
      <CreateAccount v-if="showCreateAccount" v-on:fnExistAccount="fnCreateAccount"/>
      <ExistAccount v-else v-on:fnCreateAccount="fnCreateAccount"/>
    </div>
    
    
  </div>
</template>

<script>
import CreateAccount from '@/components/CreateAccount.vue'
import ExistAccount from '@/components/ExistAccount.vue'

export default {
  data() {
    return {
      logo: require('../assets/logo.svg'),
      showCreateAccount: false,
    }
  },
  methods: {
    fnCreateAccount: function(value) {
      let vm = this
      vm.showCreateAccount = value
    }
  },
  components: {
    CreateAccount,
    ExistAccount
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/helpers.scss';
  @import '../styles/default.scss';
  .wrapper_login{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
  .container_logo{
    display: flex;
    flex-direction: column;
    font-weight: 500;
    color: map-get($COLORS,fuchsia);
    img{
      transform: rotate(30deg);
    }
    .text_logo{
      color: map-get($COLORS,text);
      background: map-get($COLORS,white);
      mix-blend-mode: multiply;
      position: relative;
      &::after{
        content: '';
        background-image: linear-gradient(120deg, map-get($COLORS,orange), map-get($COLORS,fuchsia));
        mix-blend-mode: screen; //<-- atento a esta linea//
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>