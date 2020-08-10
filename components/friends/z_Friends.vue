<template>

    <div class="z_con-bor">
      <div class="z_friend float-left">
        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w1.png'" alt="爱菠萝"></div>
        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w2.png'" alt="中科数据"></div>
        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w3.png'" alt="王派医学"></div>
        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w12.png'" alt="大立教育"></div>
        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w5.png'" alt="研大医学考研"></div>

      </div>
      <div class="z_friend float-left">
        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w7.png'" alt="敬之课堂"></div>
        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w8.png'" alt="瑞达注会"></div>
        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w9.png'" alt="众学"></div>
        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w10.png'" alt="海绵学堂"></div>
        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w11.png'" alt="周翰教育"></div>

      </div>
      <div class="z_friend float-left">

        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w6.png'" alt="1元ABC"></div>
        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w-1.png'" alt="医视界"></div>
        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w15.png'" alt="智慧PD"></div>
        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w16.png'" alt="金山云"></div>
        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w17.png'" alt="赵汝飞练字"></div>

      </div>
      <div class="z_friend float-left">
        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w13.png'" alt="青矩online"></div>
        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w-2.png'" alt="养老云课堂"></div>
        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w4.png'" alt="金英杰医学"></div>
        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w14.png'" alt="乐橙网校"></div>
        <div class="z_fren-cont"><img :src="imagePath + '/res/img/Weitu/w18.png'" alt="慧稚启元教育"></div>

      </div>

    </div>
    <!-- 12.13注册单 end-->


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

  @import "../../assets/css/common.css";
  @import "../../assets/css/NewBanner.css";
  .z_fren-cont{
    width:210px;
    height:100px;
    background:rgba(255,255,255,1);
    border-radius:4px;
    margin: 30px 18px 0;
    text-align: center;
    line-height: 100px;
    box-shadow:0px 0px 12px 3px rgba(211,211,211,0.26);
  }
  .float-left>div:first-child{
    margin-left: 0;
  }
  .float-left>div:last-child{
    margin-right: 0;
  }
  .z_friend>.z_fren-cont:last-child {
    margin-left: 18px;
  }

  .z_fren-cont img{
    margin: auto;
  }
  .z_friend{

    justify-content: center;
  }
  .z_con-bor{

  }

</style>
