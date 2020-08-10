<template>
  <div class="top-wrap">

    <headContent/>
    <nuxt ref="childPage"/>
    <footContent/>

  </div>
</template>

<script>
  import headContent from '@/components/partial/Header'
  import footContent from '@/components/partial/Footer'



  export default {
    name: 'app',
    components:{
      headContent,
      footContent
    },
    data () {
      return {

      }
    },

    filters: {

    },created(){

      let currentUrl=this.$route.path;
      if(currentUrl=="/"){
        this.$store.commit('commonStore/updateHeaderIndex',true);
      }


    },

    mounted(){

      $("span[id^='cnzz_stat_icon_']").hide();
    },

    methods:{


    }
  }


</script>

