<template>
  <div class="foot">
    <div class="foot-info">
      <div class="foot-inner">
        <div class="foot-desc">
          <h3>联系我们</h3>
          <h4>客服电话</h4>
          <p class="contact">400-8866-736</p>
          <h4>联系邮箱</h4>
          <p class="contact">tim@eduhiker.com</p>
          <h4>联系地址</h4>
          <p class="grey-color">北京市海淀区新龙大厦B座718室</p>
        </div>
        <img :src="imagePath + '/res/img/mobile/erweima.png'" width="124" height="125" alt="">
      </div>
      <div>
        <p class="grey-color" style="text-align: center">copyright 2017-2020 版权所有北京新辰金创科技有限公司</p>
        <p class="grey-color" style="text-align: center;margin-top: 6px">京ICP备17063345号-1 </p>
      </div>
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
  .foot {
    width: 100%;
    background-color: #000001;
    display: flex;
    justify-content: center;
  }
  .foot-info {
    width: 375px;
    height: 359px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 36px 20px 56px;
  }
  .foot-inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
  h3, h4 {
    color: #fff;
    font-weight: 400;
  }
  h3 {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 20px;
  }
  h4 {
    font-size: 12px;
    line-height: 17px;
  }
  .contact {
    font-size: 12px;
    color: #5BB0FF;
    font-weight: 500;
    margin: 4px 0 10px;
  }
  .grey-color {
    font-size: 12px;
    font-weight: 400;
    color: #999;
    line-height: 17px;
    margin-top: 4px;
  }
  .foot img {

  }
</style>
