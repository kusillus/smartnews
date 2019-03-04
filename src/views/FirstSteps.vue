<template>
	<div class="max_size_wrapper">
    <div v-if="activeMenu" class="controls-steps justify-between align-center py2">
      <div @click="nextStep(activePage - 1)" class="align-center prev-control">
        <i v-html="svgArrow"></i>
        {{activeMenu}}
      </div>
      <div class="align-center cancel-control">
        Cancel
      </div>
    </div>
		<div v-show="activePage === 0" class="container_step_1">
			<div class="container_logo pt10 pb3">
				<img :src="logo" alt="imagen">
				<div>
					<span class="text_logo">
					SmartNews
					</span>
				</div>
			</div>
			<div class="py6">
				<img class="fs_imagen" :src="banner" alt="">
        <p class="pt4" v-html="stepInfo"></p>
			</div>
      <div class="w100">
        <button @click="nextStep(1)" class="btn btn-principal-gradient w100 text-center mb4">
          Comenzar tour
        </button>
      </div>
		</div>
    <div v-show="activePage === 1" class="">
      <stepHeader
        :bgComponent="require('../assets/bg_home.jpg')"
        :msgOption="'Selecciona las categorias de tu interés'"/>
      <listMultiselect :listItems="listCategories"/>
      <button @click="nextStep(2)" class="btn btn-principal-gradient w100 text-center mt10">
        Siguiente
      </button>
    </div>
    <div v-show="activePage === 2" class="">
      <stepHeader
        :bgComponent="require('../assets/bg_home.jpg')"
        :msgOption="'Selecciona los medios a seguir'"/>
      <listMultiselect :listItems="listMedios"/>
      <button @click="nextStep(3)" class="btn btn-principal-gradient w100 text-center mt10">
        Siguiente
      </button>
    </div>
    <div v-show="activePage === 3" class="">
      <finishSteps :bannerFinish="bannerFinish"/>
      <button @click="nextStep(3)" class="btn btn-principal-gradient w100 text-center mt10">
        Finalizado
      </button>
    </div>
	</div>
</template>

<script>
import stepHeader from '@/components/StepHeader.vue'
import listMultiselect from '@/components/ListMultiSelect.vue'
import finishSteps from '@/components/FinishSteps.vue'
export default {
    data() {
        return {
          svgArrow: '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>',
          activePage: 0,
          activeMenu: null,
          logo: require('../assets/logo.svg'),
          banner: require('../assets/fs_01.jpg'),
          bannerFinish: require('../assets/fs_01.jpg'),
          stepInfo: 'Uno de los problemas con los que se encuentra el espectador la primera vez que ve 2001: una odisea del espacio es la dificultad para comprender el sentido de muchos de los elementos del argumento',
          listCategories: [
            {
                id: 1,
                icon: '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M11,13.5V21.5H3V13.5H11M12,2L17.5,11H6.5L12,2M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13Z" /></svg>',
                name: 'cat_1',
                label: 'Categoria 1',
                selected: 1
            },
            {
                id: 2,
                icon: '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M11,13.5V21.5H3V13.5H11M12,2L17.5,11H6.5L12,2M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13Z" /></svg>',
                name: 'cat_1',
                label: 'Categoria 2',
                selected: 0
            },
            {
                id: 3,
                icon: '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M11,13.5V21.5H3V13.5H11M12,2L17.5,11H6.5L12,2M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13Z" /></svg>',
                name: 'cat_1',
                label: 'Categoria 3',
                selected: 0
            },
            {
                id: 4,
                icon: '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M11,13.5V21.5H3V13.5H11M12,2L17.5,11H6.5L12,2M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13Z" /></svg>',
                name: 'cat_1',
                label: 'Categoria 1',
                selected: 1
            },
          ],
          listMedios: [
            {
                id: 1,
                icon: '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M11,13.5V21.5H3V13.5H11M12,2L17.5,11H6.5L12,2M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13Z" /></svg>',
                name: 'cat_1',
                label: 'Medio 1',
                selected: 1
            },
            {
                id: 2,
                icon: '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M11,13.5V21.5H3V13.5H11M12,2L17.5,11H6.5L12,2M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13Z" /></svg>',
                name: 'cat_1',
                label: 'Medio 2',
                selected: 0
            },
            {
                id: 3,
                icon: '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M11,13.5V21.5H3V13.5H11M12,2L17.5,11H6.5L12,2M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13Z" /></svg>',
                name: 'cat_1',
                label: 'Medio 3',
                selected: 0
            },
            {
                id: 4,
                icon: '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M11,13.5V21.5H3V13.5H11M12,2L17.5,11H6.5L12,2M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13Z" /></svg>',
                name: 'cat_1',
                label: 'Medio 1',
                selected: 1
            },
          ]
        }
    },
    methods: {
      nextStep: function(page) {
        let vm = this
        switch(page) {
          case 0:
            vm.activeMenu = null
            break
          case 1:
            vm.activeMenu = 'Categorias'
            break
          case 2:
            vm.activeMenu = 'Medios'
            break
          case 3:
            vm.activeMenu = 'Finalizado'
            break
        }
        vm.activePage = page
      },

    },
    components:{
      stepHeader,
      listMultiselect,
      finishSteps
    }
    
}
</script>

<style lang="scss">
  @import '../styles/helpers.scss';
  @import '../styles/default.scss';
  @import '../styles/buttons.scss';
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
  .fs_imagen{
    width: 100%;
    border-radius: 10px;
  }

  .max_size_wrapper{
    max-width: 290px;
    margin: 0 auto;
  }
  .container_step_1{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 100vh;
  }
  .controls-steps{
    // display: flex;
    // align-items: center;
    // justify-content: space-between;
    .prev-control{
      cursor: pointer;
      color: map-get($COLORS,fuchsia);
      svg{
        path{
          fill: map-get($COLORS,fuchsia);
        }
      }
    }
    .cancel-control{
      cursor: pointer;
      font-size: 14px;
      color: map-get($COLORS,gray-1);
    }
  }
</style>

