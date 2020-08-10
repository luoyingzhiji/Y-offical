<template>
  <div class="top-wrap">
    <Header/>

    <nuxt ref="childPage"/>

    <Footer/>
  </div>
</template>

<script>
  import Header from '@/components/mobile/header';
  import Footer from '@/components/mobile/footer';
  export default {
    name: 'mobile',
    // middleware: 'mobileMiddle',
    components: {
      Header,
      Footer,
    },

    mounted () {
      $("span[id^='cnzz_stat_icon_']").hide();
    }
  }
</script>
