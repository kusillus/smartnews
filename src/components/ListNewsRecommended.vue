<template>
	<div>
		<div @click="newsSelected(item)" class="container-news m3 p4" v-for="(item, i) in listRecommended" :key="i">
			<div class="info-news">
				<h4 class="pb1">{{item.title}}</h4>
				<p>{{item.mention | summaryText(200)}}</p>
			</div>
			<div class="align-center justify-between pt2">
				<span class="align-center">
					<img class="icon-media mr2" :src="item.icon_media" alt="">
					{{item.media}}
				</span>
				<span>
					F. Publ. {{item.date}}
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		listRecommended: {
			type: Array,
			required: true
		}
	},
	data() {
		return {

		}
	},
	filters:{
		summaryText: function(val, size){
			return val.length > size ? val.substr(0, size) + ' ...': val.substr(0, size)
		}
	},
	methods:{
		newsSelected: function(item){
			let vm = this
			vm.$emit('newsSelected', item.id)
		}
	}
}
</script>

<style lang="scss">
.container-news{
	font-size: 14px;
	border-radius: 4px;
	text-align: left;
	border: solid 1px #d8d8d8;
	.icon-media{
		width: 20px;
    height: 20px;
    border-radius: 50%;
	}
	.info-news{
		h4{
			font-weight: bold;
			font-size: 15px;
		}
		p{
			line-height: 16px;
		}
	}
}
</style>


