<template>
	<div class="py4">
        <div class="step_imagen --finish" :style="{backgroundImage: 'url('+bannerFinish+')'}"></div>
		<h5 class="py8">Bien hecho!</h5>
        <p class="pb5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.</p>
	</div>
</template>
<script>
export default {
    props: {
        bannerFinish: {
            required: true,
            type: String
        }
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
    .step_imagen.--finish{
        border-radius: 50%;
        width: 10rem;
        height: 10rem;
        margin: 0 auto;
    }

</style>


