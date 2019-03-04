<template>
	<div class="text-left">
		<div class="container-detail-news px4" v-if="isValidData">
			<span class="align-center">
				<i @click="goBack()" v-html="svgArrow" class="mr2 align-center"></i>
				<h4 class="pb1 text-center pt4 pb3">{{detailNews.title}}</h4>
			</span>
			<p >{{detailNews.mention}}</p>
			<div class="py3">
				<div class="mb3">Tags:</div>
				<span class="tag-list p1 px2 mr1" v-for="(item, i) in detailNews.tags" :key="i">
					{{item}}
				</span>
			</div>
			<div class="justify-between align-center py4">
				<div class="align-center">
					<img class="icon-media mr2" :src="detailNews.icon_media" alt="">
					{{detailNews.media}}
				</div>
				<div>
					shareOptions
				</div>
			</div>
		</div>
		<div v-else class="py10">
			Algo salio mal, no se obtuvieron datos
		</div>
	</div>
</template>

<script>
export default {
	props: {
		detailNews: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			svgArrow:'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>',
			isValidData: true
		}
	},
	mounted: function (){
		this.validateNotEmptyNews()
	},
	methods: {
		goBack: function(){
			let vm = this
			vm.$emit('goBackHome')
		},
		validateNotEmptyNews: function() {
			let vm = this
			vm.isValidData = Object.keys(vm.detailNews).length > 0 ? true: false
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/default.scss';
.tag-list{
	// background: linear-gradient(120deg, map-get($COLORS,orange), map-get($COLORS,fuchsia));
	//background-image: url('../assets/bg_home.jpg'),linear-gradient(120deg, map-get($COLORS,orange), map-get($COLORS,fuchsia));
	border-radius: 4px;
	color: map-get($COLORS,text);
	font-size: 12px;
	// font-weight: 600;
	border: solid 1px map-get($COLORS,gray-1);
}
.container-detail-news{
	.icon-media{
		width: 30px;
    height: 30px;
    border-radius: 50%;
	}
	h4{
		font-weight: bold;
		font-size: 15px;
	}
	p{
		line-height: 16px;
	}
}
</style>
