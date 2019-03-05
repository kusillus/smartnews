<template>
  <div class="mt9">
    <div action="" class="wrapper_form">
      <div class="form-group px4 text-left">
        <label for="">Email</label>
        <input class="form-control" type="text" v-model="user">
        <small class="msg_error" v-show="err_msg_usr">{{err_msg_usr}}</small>
      </div>
      <div class="form-group px4 text-left">
        <label for="">Password</label>
        <input class="form-control" type="password" v-model="password">
        <small class="msg_error" v-show="err_msg_pass">{{err_msg_pass}}</small>
      </div>
      <div class="form-group px4 text-right">
        <span class="small-text cursor-pointer">
          ¿Olvidaste tu contraseña?
        </span>
      </div>
      <div class="group-buttons px4 mt8">
        <button @click="fnSendForm" class="btn btn-principal-gradient w100 text-left mb4">
          Login
        </button>
        <button @click="loginWithFacebook()" class="btn btn-facebook w100 text-left mb4">
          Login con Facebook
        </button>
        <span @click="fnCreateAccount" class="small-text cursor-pointer">
          ¿No tienes una cuenta? 
          <b class="text_link">Registrate</b>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { validate_login } from '../helpers/validationForms.js'
import { loadFbSdk, getFbLoginStatus, fbLogin } from '../helpers/facebook_sdk.js'
// import Swal from 'sweetalert2'

export default {
  data() {
    return {
      user: null,
      password: null,
      err_msg_usr: null,
      err_msg_pass: null,
      app_id: '361771537998812',
      app_version:'v3.2',
      FB: undefined,
      loginOptions: {
          scope: 'email'
      }
    }
  },
  mounted: function() {
    loadFbSdk(this.app_id, this.app_version)
      .then(getFbLoginStatus)
      .then(response => {
        console.log(response)
        if (response.status === 'connected') {
          this.isConnected = true
          this.FB = window.FB
        }
      })

  },
  methods: {
    fnCreateAccount: function() {
      this.$emit('fnCreateAccount', true)
    },
    showLoaderPrincipal: function(val){
      let vm = this
      vm.$store.commit('setShowLoader', val)
    },
    fnSendForm: function() {
      let vm = this
      vm.showLoaderPrincipal(true)
      if(vm.validateForm()){
        localStorage.usr = 123
        vm.storageUserData()
        this.$router.push('/')
      } else {
        localStorage.usr = undefined
        vm.showLoaderPrincipal(false)
      }
    },
    loginWithFacebook: function(){
      let vm = this
      vm.showLoaderPrincipal(true)
      fbLogin(this.loginOptions)
        .then(response => {
          if (response.status === 'connected'){
            console.log('validation login')
            localStorage.usr = 123
            this.$router.push('/')
          } else {
            localStorage.usr = undefined
          }
          this.FB = window.FB
        })
      
    },
    storageUserData: function(user) {

    },
    validateForm: function() {
      let vm = this
      let validation = validate_login(vm.user, vm.password)
      vm.err_msg_usr = validation.msg_user
      vm.err_msg_pass = validation.msg_password
      if(validation.success) return true
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../styles/default.scss';
@import '../styles/helpers.scss';
@import '../styles/buttons.scss';
@import '../styles/forms.scss';

.wrapper_form{
  max-width: 290px;
  margin: 0 auto;
}
.text_link{
  color: map-get($COLORS, fuchsia);
}
</style>
