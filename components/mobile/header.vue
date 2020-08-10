<template>
  <div class="head">
    <a class="logo">
      <img :src="imagePath + '/res/img/mobile/mobile-logo.png'" width="134" height="33" alt="">
    </a>
    <div>
      <img :src="imagePath + '/res/img/mobile/list-icon.png'" width="23" height="23" alt="">
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['info']),
      ...mapState('commonStore',['headerIndex','imagePath']),
    },
  }
</script>

<style scoped>
  .head {
    width:100%;
    height:60px;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 8px 0px rgba(212,212,212,0.5);
    padding: 0 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    display: block;
  }
</style>
