<template>
  <div class="mt9">
    <div action="" class="wrapper_form">
      <div class="form-group px4 text-left">
        <label for="">Nombre de usuario</label>
        <input class="form-control" type="text" v-model="username">
        <small class="msg_error" v-show="err_msg_usrname">{{err_msg_usrname}}</small>
      </div>
      <div class="form-group px4 text-left">
        <label for="">Email</label>
        <input class="form-control" type="text" v-model="email">
        <small class="msg_error" v-show="err_msg_email">{{err_msg_email}}</small>
      </div>
      <div class="form-group px4 text-left">
        <label for="">Password</label>
        <input class="form-control" type="password" v-model="password">
        <small class="msg_error" v-show="err_msg_pass">{{err_msg_pass}}</small>
      </div>
      <div class="form-group px4 text-left">
        <label for="">Repita Password</label>
        <input class="form-control" type="password" v-model="password_rep">
        <small class="msg_error" v-show="err_msg_pass_rep">{{err_msg_pass_rep}}</small>
      </div>
      <div class="group-buttons px4 mt8">
        <button @click="fnCreateAccount" class="btn btn-login w100 text-left mb4">
          Crear Cuenta
        </button>
        <button class="btn btn-facebook w100 text-left mb4">
          Crear con Facebook
        </button>
        <span @click="fnExistAccount" class="small-text cursor-pointer">
          ¿Ya tienes una cuenta? 
          <b class="text_link">Ingresa</b>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { validate_create_account } from '../helpers/validationForms.js'

export default {
  data() {
    return {
      username: null,
      email: null,
      password: null,
      password_rep: null,
      err_msg_usrname: null,
      err_msg_email: null,
      err_msg_pass: null,
      err_msg_pass_rep: null
    }
  },
  methods: {
    fnCreateAccount: function() {
      let vm = this
      
      if(vm.validateForm()){
        console.log('khe hace')
      }
    },
    fnExistAccount: function() {
      this.$emit('fnExistAccount', false)
    },
    validateForm: function() {
      let vm = this
      let validation = validate_create_account(vm.username,vm.email,vm.password,vm.password_rep)
      console.log(validation)
      vm.err_msg_usrname = validation.msg_user
      vm.err_msg_email = validation.msg_email
      vm.err_msg_pass = validation.msg_password
      vm.err_msg_pass_rep = validation.msg_password_rep
      if(validation.success) {
        console.log('Aqui va el servicio que manda al HOME')
      }



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

