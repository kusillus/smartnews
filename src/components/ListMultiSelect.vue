<template>
	<ul class="wrapper-multi-select">
		<li class="item-in-list justify-between align-center" v-for="(item, i) in listItems" :key="i">
			<span class="align-center">
				<i class="mr2" v-html="item.icon"></i>
				{{item.label}}
			</span>
			<label :class="item.selected==1?'item-selected':'item-no-selected'" >
				<input
				 	v-show="false"
					type="checkbox"
					v-model="item.selected"
					true-value="1"
					false-value="0">
			</label>
		</li>
	</ul>
</template>
<script>
export default {
	props:{
		listItems:{ 
			required: true,
			type: Array	
		}
	},
	data() {
		return {
			// categorias: [
			// 	{
			// 			id: 1,
			// 			name: 'cat_1',
			// 			label: 'Categoria 1'
			// 	},
			// 	{
			// 			id: 2,
			// 			name: 'cat_1',
			// 			label: 'Categoria 2'
			// 	},
			// 	{
			// 			id: 3,
			// 			name: 'cat_1',
			// 			label: 'Categoria 3'
			// 	},

			// ]
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
	.item-no-selected,
	.item-selected {
		cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-sizing: border-box;
		border: solid 2px darkgrey;
	}
	.item-selected{
		background: #fa0581;
		border: solid 2px #9c004f;
	}
	.item-in-list{
		border-bottom: solid 1px #e0e0e0;
    padding: 0.5rem;
    margin-bottom: .5rem;
	}
	.wrapper-multi-select{
		max-height: 25rem;
		overflow: auto;

	}

</style>


