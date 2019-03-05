<template>
	<div class="wrapper-user pt10">
		<div class="container-user">
			<img :src="UserData.picture" alt="">
			<h2>{{UserData.name}}</h2>
			<div class="username">{{UserData.username}}</div>
			<!-- <div>{{UserData.mail}}</div> -->
			<button @click="LogOut" class="btn btn-principal-gradient w100 text-center mb4 mt10">
				Logout
			</button>
			<button @click="Cancel" class="btn btn-principal-gradient w100 text-center mb4 mt10">
				Cancelar
			</button>
		</div>
	</div>
</template>

<script>
import { userLogOut } from '../helpers/accessValidation.js'
export default {
	data() {
		return {

		}
	},
	computed: {
		UserData: function(){
			return this.$store.state.userData
		}
	},
	methods: {
		LogOut: function() {
			let vm = this
			if(userLogOut()){
				vm.$router.push('/login')
			} else {
				console.log('logout fail')
			}
		},
		Cancel: function(){
			let vm = this
			vm.$router.push('/')
		}
	}
	
}
</script>

<style lang="scss">
.wrapper-user{
  max-width: 290px;
  margin: 0 auto;
}
.container-user{
	img{
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
	h2{
		font-weight: 500;
	}
	.username{
		font-size: 14px;
	}
}
</style>

