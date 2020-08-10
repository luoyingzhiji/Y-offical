<template>
    <div class="top-wrap">
      <nuxt ref="childPage"/>
    </div>
</template>

<script>


  export default {
    name: '',
    components:{

    },
    data () {
      return {

      }
    },

    filters: {

    },

    created(){


    },
    mounted(){
      $("span[id^='cnzz_stat_icon_']").hide();

    },
    methods:{

    }
  }
</script>

<style scoped>
  .top-wrap {

  }
</style>
