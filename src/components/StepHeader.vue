<template>
	<div>
		<div class="step_imagen" :style="{backgroundImage: 'url('+bgComponent+')'}"></div>
		<p class="py8" v-html="msgOption"></p>
	</div>
</template>
<script>
export default {
	props: {
		msgOption: {
			type: String,
			default: 'Mensaje no configurado'
		},
		bgComponent: {
			type: String,
			required: true,
		},
	},
	data() {
		return {

		}
	},
	methods: {

	}
}
</script>

<style lang="scss">
	@import '../styles/helpers.scss';
  // @import '../styles/default.scss';
  // @import '../styles/buttons.scss';
	.step_imagen{
    // background-image: url('../assets/bg_home.jpg');
    width: 100%;
    height: 10rem;
    background-size: cover;
    background-position: center;
  }

</style>


