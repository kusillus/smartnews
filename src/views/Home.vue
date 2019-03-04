<template>
  <div class="home">
    <Menu/>
    <ListNewsRecommended v-if="!showFullNote" v-on:newsSelected="newsSelected" :listRecommended="listNewsRecommended"/>
    <ViewDetailNews v-else :detailNews="detailNews" v-on:goBackHome="goBackHome"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import ListNewsRecommended from '@/components/ListNewsRecommended.vue'
import ViewDetailNews from '@/components/ViewDetailNews.vue'

export default {
  name: 'home',
  data() {
    return {
      showFullNote: false,
      detailNews: {},
      // listNewsRecommended: [],
      listNewsRecommended: [
        {
          id: 123,
          title: 'PBI de Argentina se contrajo 2.6% el 2018',
          mention: 'La economía ­ argentina registró en el 2018 una caída de 2.6%, informó el estatal instituto de ­ estadísticas Indec. El FBI entró en recesión en el 2018 tras haber registrado un crecimiento de 2.8% en el 2017, al sufrir ­ Argentina dos crisis cambiarías el año pasado, que le hicieron perder el 50% del valor de su moneda y salir en busca de ayuda del FMI. En diciembre, el estimador mensual de actividad ­ económica cayó 7.0% en relación a igual mes del 2017, en cambio creció 0.7% en comparación con ­ noviembre, de acuerdo al Indec. Según el pronóstico del FMI, la economía argentina se contraerá 1.6% en el 2019. ',
          media: 'El Comercio',
          date: '28-02-19',
          tags: ['education', 'argentina', 'economia'],
          icon_media: 'https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-1/p100x100/26169105_10155435075287017_6479079393327151100_n.png?_nc_cat=1&_nc_ht=scontent.flim20-1.fna&oh=ab63a677eb7fc5a1fb36e465c43a0972&oe=5D207BCB'

        },
        {
          id: 124,
          title: 'Iniciativas con la tecnología como aliado',
          mention: 'En los distintos procesos de fundición y fabricación de las barras de acero de Siderperú se generan múltiples emisiones, sin embargo, prácticamente ninguna llega al medio ambiente. Y es que la compañía del grupo Gerdau en 2010 en su complejo siderúrgico local puso en marcha un captador de emisiones de última generación que capta más del 99,9% de los gases y partículas que se generan cuando convierte la chatarra en acero.',
          media: 'El Peruano',
          date: '28-02-19',
          tags: ['education', 'argentina', 'economia'],
          icon_media: 'https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-1/p100x100/26169105_10155435075287017_6479079393327151100_n.png?_nc_cat=1&_nc_ht=scontent.flim20-1.fna&oh=ab63a677eb7fc5a1fb36e465c43a0972&oe=5D207BCB'
        },
        {
          id: 125,
          title: 'Generación abierta',
          mention: 'En Colbún están especialmente orgullosos de su proyecto hidroeléctrico Angostura. Y es que el proyecto de la compañía de energía eléctrica chilena en la región de Bío Bío, que se inauguró en 2014, fue el mayor de este tipo construido a nivel local en una década. Su construcción, en la que trabajaron más de 4.000 personas, tomó cuatro años e implicó, además de la construcción de una presa y caverna de máquinas, la reposición de carreteras y la creación de un complejo turístico que hoy es un importante polo de atracción a la zona.',
          media: 'El Comercio',
          date: '28-02-19',
          tags: ['education', 'argentina', 'economia'],
          icon_media: 'https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-1/p100x100/26169105_10155435075287017_6479079393327151100_n.png?_nc_cat=1&_nc_ht=scontent.flim20-1.fna&oh=ab63a677eb7fc5a1fb36e465c43a0972&oe=5D207BCB'
        },
        {
          id: 126,
          title: 'PpK: hoy cambiará su logo y denominación',
          mention: 'El congresista no agrupado Salvador Heresi informó a Perú21 que hoy se elegirá la nueva denominación y símbolo que llevará el partido Peruanos por Kambio (PpK). "Lo más probable es que a partir del mediodía tengamos los resultados", manifestó. Heresi, quien es secretario general de PpK, detalló que también se oficializará la designación del legislador Juan Sheput como presidente la Comisión Política de la agrupación.',
          media: 'Peru 21',
          date: '28-02-19',
          tags: ['education', 'argentina', 'economia'],
          icon_media: 'https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-1/p100x100/26169105_10155435075287017_6479079393327151100_n.png?_nc_cat=1&_nc_ht=scontent.flim20-1.fna&oh=ab63a677eb7fc5a1fb36e465c43a0972&oe=5D207BCB'
        },
        {
          id: 127,
          title: 'PBI de Argentina se contrajo 2.6% el 2018',
          mention: 'La economía ­ argentina registró en el 2018 una caída de 2.6%, informó el estatal instituto de ­ estadísticas Indec. El FBI entró en recesión en el 2018 tras haber registrado un crecimiento de 2.8% en el 2017, al sufrir ­ Argentina dos crisis cambiarías el año pasado, que le hicieron perder el 50% del valor de su moneda y salir en busca de ayuda del FMI. En diciembre, el estimador mensual de actividad ­ económica cayó 7.0% en relación a igual mes del 2017, en cambio creció 0.7% en comparación con ­ noviembre, de acuerdo al Indec. Según el pronóstico del FMI, la economía argentina se contraerá 1.6% en el 2019. ',
          media: 'El Comercio',
          date: '28-02-19',
          tags: ['education', 'argentina', 'economia'],
          icon_media: 'https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-1/p100x100/26169105_10155435075287017_6479079393327151100_n.png?_nc_cat=1&_nc_ht=scontent.flim20-1.fna&oh=ab63a677eb7fc5a1fb36e465c43a0972&oe=5D207BCB'
        },
        {
          id: 128,
          title: 'Iniciativas con la tecnología como aliado',
          mention: 'En los distintos procesos de fundición y fabricación de las barras de acero de Siderperú se generan múltiples emisiones, sin embargo, prácticamente ninguna llega al medio ambiente. Y es que la compañía del grupo Gerdau en 2010 en su complejo siderúrgico local puso en marcha un captador de emisiones de última generación que capta más del 99,9% de los gases y partículas que se generan cuando convierte la chatarra en acero.',
          media: 'El Peruano',
          date: '28-02-19',
          tags: ['education', 'argentina', 'economia'],
          icon_media: 'https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-1/p100x100/26169105_10155435075287017_6479079393327151100_n.png?_nc_cat=1&_nc_ht=scontent.flim20-1.fna&oh=ab63a677eb7fc5a1fb36e465c43a0972&oe=5D207BCB'
        },
        {
          id: 129,
          title: 'Generación abierta',
          mention: 'En Colbún están especialmente orgullosos de su proyecto hidroeléctrico Angostura. Y es que el proyecto de la compañía de energía eléctrica chilena en la región de Bío Bío, que se inauguró en 2014, fue el mayor de este tipo construido a nivel local en una década. Su construcción, en la que trabajaron más de 4.000 personas, tomó cuatro años e implicó, además de la construcción de una presa y caverna de máquinas, la reposición de carreteras y la creación de un complejo turístico que hoy es un importante polo de atracción a la zona.',
          media: 'El Comercio',
          date: '28-02-19',
          tags: ['education', 'argentina', 'economia'],
          icon_media: 'https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-1/p100x100/26169105_10155435075287017_6479079393327151100_n.png?_nc_cat=1&_nc_ht=scontent.flim20-1.fna&oh=ab63a677eb7fc5a1fb36e465c43a0972&oe=5D207BCB'
        },
        {
          id: 120,
          title: 'PpK: hoy cambiará su logo y denominación',
          mention: 'El congresista no agrupado Salvador Heresi informó a Perú21 que hoy se elegirá la nueva denominación y símbolo que llevará el partido Peruanos por Kambio (PpK). "Lo más probable es que a partir del mediodía tengamos los resultados", manifestó. Heresi, quien es secretario general de PpK, detalló que también se oficializará la designación del legislador Juan Sheput como presidente la Comisión Política de la agrupación.',
          media: 'Peru 21',
          date: '28-02-19',
          tags: ['education', 'argentina', 'economia'],
          icon_media: 'https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-1/p100x100/26169105_10155435075287017_6479079393327151100_n.png?_nc_cat=1&_nc_ht=scontent.flim20-1.fna&oh=ab63a677eb7fc5a1fb36e465c43a0972&oe=5D207BCB'
        },
      ]
    }
  },
  mounted: function (){
    this.showLoaderPrincipal(true)
    this.getNewsRecommendedByUser()
  },
  methods: {
    goBackHome: function(){
      let vm = this
      vm.detailNews = {}
      vm.showFullNote = false
    },
    newsSelected: function(id) {
      let vm = this
      vm.showLoaderPrincipal(true)
      setTimeout(() => {
        vm.detailNews = vm.fakeSearchNews(id)
        vm.showFullNote = true
        vm.showLoaderPrincipal(false)
      }, 1000)
      

    },
    fakeSearchNews(id){
      let vm = this
      let item = undefined
      Object.keys(vm.listNewsRecommended).forEach(i => {
        parseInt(vm.listNewsRecommended[i].id) === parseInt(id) ? item = vm.listNewsRecommended[i]:''
      })
      return item? item : {}
    },
    getNewsRecommendedByUser: function() {
      let vm = this
      // TODO: Servicio con el que obtenemos las noticias recomendadas segun las preferencias del usuario, una vez terminado
      // la carga quitamos el loader principal.
      console.log(localStorage)
      setTimeout(() => {
        vm.ListNewsRecommended =  vm.dummylistNewsRecommended
        vm.showLoaderPrincipal(false)
      }, 2000)
      
    },
    showLoaderPrincipal: function(val){
      let vm = this
      vm.$store.commit('setShowLoader', val)
    },
    
  },
  components: {
    Menu,
    ListNewsRecommended,
    ViewDetailNews
  }
}
</script>

<style lang="scss" scoped>

</style>

