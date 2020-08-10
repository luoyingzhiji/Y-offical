<template>
  <div class="home">
    <div class="banner">
      <no-ssr>
        <swiper :options="rotationOption">
          <swiper-slide v-for="(item, index) in rotationList" :key="index + item.src"
                        style="width: 100%;height: 234px;position: relative;overflow: hidden;">
            <a href="">
              <img :src="item.src" alt="">
              <div class="banner-desc">
                <div class="title" v-if="index == 0">{{ item.title }}</div>
                <div class="title" v-else style="width: 144px">{{ item.title }}</div>

                <div>
                  <button disabled v-if="index == 0" style="color: #fff;background-color:#1890ff;">免费试用</button>
                  <button disabled v-if="index == 1" style="color: #8464FF;background-color:#fff;">免费试用</button>
                  <button disabled v-if="index == 2" style="color: #FF7041;background-color:#fff;">免费试用</button>
                  <p>致电400-8866-736</p>
                </div>
              </div>
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </no-ssr>
    </div>

    <div class="main">
<!--      网校系统-->
      <div class="wx-system effect">
        <div class="title">
          <h3>网校系统</h3>
          <h4>教师随时随地进行在线授课</h4>
        </div>

        <img :src="imagePath + '/res/img/mobile/wx-system-img.png'" width="252" height="163" alt="">
      </div>

<!--      企业培训-->
      <div class="enterprise-train effect">
        <div class="title">
          <h3>企业培训</h3>
          <h4>多终端一体化、多种场景随意切换</h4>
        </div>

        <img :src="imagePath + '/res/img/mobile/enterprise-train-img.png'" width="257" height="152" alt="">
      </div>

<!--      视频云-->
      <div class="video-cloud effect">
        <div class="title">
          <h3>视频云</h3>
          <h4>专业级加密的视频导入工具</h4>
        </div>

        <img :src="imagePath + '/res/img/mobile/video-cloud-img.png'" width="253" height="183" alt="">
      </div>

<!--      试用/注册-->
      <div class="hiker-btn">
        <div class="hiker-btn-inner">
          <button>立即咨询</button>
          <button>免费试用</button>
        </div>
      </div>

<!--      选择hiker-->
      <div class="get-benefit">
        <h3>选择HIKER，你会得到这些</h3>
        <div class="benefit-list">
          <div>
            <div>
              <img :src="imagePath + '/res/img/mobile/customized-icon.png'" width="32" height="32" alt="">
              <p>私有定制</p>
            </div>
            <div>
              <img :src="imagePath + '/res/img/mobile/experience-icon.png'" width="32" height="32" alt="">
              <p>实战经验丰富</p>
            </div>
            <div>
              <img :src="imagePath + '/res/img/mobile/source-code-icon.png'" width="32" height="32" alt="">
              <p>支持源码</p>
            </div>
          </div>

          <div>
            <div>
              <img :src="imagePath + '/res/img/mobile/performance-icon.png'" width="32" height="32" alt="">
              <p>性能稳定</p>
            </div>
            <div>
              <img :src="imagePath + '/res/img/mobile/security-icon.png'" width="32" height="32" alt="">
              <p>安全可靠</p>
            </div>
            <div>
              <img :src="imagePath + '/res/img/mobile/invitation-icon.png'" width="32" height="32" alt="">
              <p>定制邀请制</p>
            </div>
          </div>

          <div>
            <div>
              <img :src="imagePath + '/res/img/mobile/service-icon.png'" width="32" height="32" alt="">
              <p>陪伴式服务</p>
            </div>
            <div>
              <img :src="imagePath + '/res/img/mobile/approval-icon.png'" width="32" height="32" alt="">
              <p>知名机构认可</p>
            </div>
            <div>
              <img :src="imagePath + '/res/img/mobile/diversification-icon.png'" width="32" height="32" alt="">
              <p>多样化模块</p>
            </div>
          </div>
        </div>
      </div>

<!--      涉及多个行业使用-->
      <div class="industry">
        <h3>涉及多个行业使用</h3>
        <div class="industry-list">
          <ul class="am-avg-sm-2 am-avg-md-4 am-avg-lg-4 am-thumbnails"
              style="margin: 0 -2rem">
            <li>
              <span>留学语言</span>
              <img :src="imagePath + '/res/img/mobile/industry-list-1.png'" alt="">
            </li>
            <li>
              <span>金融会计</span>
              <img :src="imagePath + '/res/img/mobile/industry-list-2.png'" alt="">
            </li>
            <li>
              <span>医学教育</span>
              <img :src="imagePath + '/res/img/mobile/industry-list-3.png'" alt="">
            </li>
            <li>
              <span>政府高校</span>
              <img :src="imagePath + '/res/img/mobile/industry-list-4.png'" alt="">
            </li>
            <li>
              <span>职业教育</span>
              <img :src="imagePath + '/res/img/mobile/industry-list-5.png'" alt="">
            </li>
            <li>
              <span>企业培训</span>
              <img :src="imagePath + '/res/img/mobile/industry-list-6.png'" alt="">
            </li>
            <li>
              <span>K12教育</span>
              <img :src="imagePath + '/res/img/mobile/industry-list-7.png'" alt="">
            </li>
            <li>
              <span>更多行业</span>
              <img :src="imagePath + '/res/img/mobile/industry-list-8.png'" alt="">
            </li>
          </ul>
        </div>
      </div>

      <div class="blue-bg"></div>

<!--      问答-->
      <div class="FAQ">
        <h3>常见问答</h3>
        <div class="FAQ-inner">
          <no-ssr>
            <swiper :options="FAQOption">
              <swiper-slide v-for="(item, index) in FAQList" :key="index">

                <div class="question FAQ-desc">
                  <div class="q-icon FAQ-icon">问</div>
                  <p class="q-title">{{ item.title }}？</p>
                </div>
                <div class="answer FAQ-desc">
                  <div class="a-icon FAQ-icon">答</div>
                  <p class="a-desc">{{ item.desc }}</p>
                </div>

              </swiper-slide>
              <div class="swiper-pagination-FAQ" slot="pagination"></div>
            </swiper>
          </no-ssr>
        </div>
      </div>

      <!--他们选择了hiker-->
      <div class="choose-hiker">
        <h3>他们选择了HIKER</h3>
        <ul>
          <li>
            <img :src="imagePath + '/res/img/mobile/choose-hiker-1.png'" width="80" height="26" alt="">
          </li>
          <li>
            <img :src="imagePath + '/res/img/mobile/choose-hiker-2.png'" width="80" height="19" alt="">
          </li>
          <li>
            <img :src="imagePath + '/res/img/mobile/choose-hiker-3.png'" width="80" height="25" alt="">
          </li>

          <li>
            <img :src="imagePath + '/res/img/mobile/choose-hiker-4.png'" width="80" height="17" alt="">
          </li>
          <li>
            <img :src="imagePath + '/res/img/mobile/choose-hiker-5.png'" width="80" height="17" alt="">
          </li>
          <li>
            <img :src="imagePath + '/res/img/mobile/choose-hiker-6.png'" width="47" height="39" alt="">
          </li>

          <li>
            <img :src="imagePath + '/res/img/mobile/choose-hiker-7.png'" width="42" height="42" alt="">
          </li>
          <li>
            <img :src="imagePath + '/res/img/mobile/choose-hiker-8.png'" width="80" height="20" alt="">
          </li>
          <li>
            <img :src="imagePath + '/res/img/mobile/choose-hiker-9.png'" width="80" height="30" alt="">
          </li>

          <li>
            <img :src="imagePath + '/res/img/mobile/choose-hiker-10.png'" width="80" height="25" alt="">
          </li>
          <li>
            <img :src="imagePath + '/res/img/mobile/choose-hiker-11.png'" width="80" height="28" alt="">
          </li>
          <li>
            <img :src="imagePath + '/res/img/mobile/choose-hiker-12.png'" width="80" height="22" alt="">
          </li>

          <li>
            <img :src="imagePath + '/res/img/mobile/choose-hiker-13.png'" width="80" height="18" alt="">
          </li>
          <li>
            <img :src="imagePath + '/res/img/mobile/choose-hiker-14.png'" width="75" height="51" alt="">
          </li>
          <li>
            <img :src="imagePath + '/res/img/mobile/choose-hiker-15.png'" width="80" height="42" alt="">
          </li>

          <li>
            <img :src="imagePath + '/res/img/mobile/choose-hiker-16.png'" width="80" height="30" alt="">
          </li>
          <li>
            <img :src="imagePath + '/res/img/mobile/choose-hiker-17.png'" width="80" height="17" alt="">
          </li>
          <li>
            <img :src="imagePath + '/res/img/mobile/choose-hiker-18.png'" width="80" height="33" alt="">
          </li>
        </ul>
      </div>

      <!-- 权威资质认证-->
      <div class="certificate">
        <h3>安全专业服务和权威资质认证</h3>
        <div style="width: 100%;overflow: auto;height:289px;position: relative">
          <div class="certificate-inner" ref="certificate">
            <div v-for="(item, index) in certificateList" :key="index">
              <img :src="item.src" alt="" class="" width="192" height="263">
            </div>
          </div>
        </div>

      </div>

<!--        快来注册吧-->
      <div class="gogogo">
        <div class="go-inner">
          <ul>
            <li>
              <span>7X24</span>
              <p>全天候服务</p>
            </li>
            <li>
              <p>解决方案</p>
              <span>32942+</span>
            </li>
            <li>
              <span>3472+</span>
              <p>安全稳定运行</p>
            </li>
            <li>
              <p>项目满意度</p>
              <span>99.9%</span>
            </li>
          </ul>
          <button>立即注册，免费试用</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import "swiper/dist/css/swiper.css";
  export default {
    name: 'home',
    layout: 'mobile',
    computed:{
      ...mapState(['info']),
      ...mapState('commonStore',['headerIndex','imagePath']),
    },
    data () {
      return {
        // banner
        rotationOption: {
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          loop: true,
          speed:300,
          pagination: {
            el: '.swiper-pagination',
          },
        },
        rotationList: [
          {
            src:'https://offical--img.oss-cn-beijing.aliyuncs.com/res/img/mobile/banner-home-1.png',
            title: '提供一站式服务的企业培训系统'
          },
          {
            src:'https://offical--img.oss-cn-beijing.aliyuncs.com/res/img/mobile/banner-home-2.png',
            title: '给用户搭建专属的网校系统'
          },
          {
            src:'https://offical--img.oss-cn-beijing.aliyuncs.com/res/img/mobile/banner-home-3.png',
            title: '安全可靠的在线视频云服务'
          }
        ],

        // 常见问答
        FAQOption: {
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          speed:300,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination-FAQ',
          },
        },
        FAQList: [
          {
            title: 'HIKER教育的产品可以在哪里使用',
            desc: 'HIKER 教育产品覆盖PC、ios、安卓、小程序等多个终端，让教育场景多样化，并且支持H5自适配，无论您在哪些设备上打开网站，都能给您极佳的显示效果 。'
          },
          {
            title: '韩少杰教育的产品可以在哪里使用',
            desc: '韩少杰 教育产品覆盖PC、ios、安卓、小程序等多个终端，让教育场景多样化，并且支持H5自适配，无论您在哪些设备上打开网站，都能给您极佳的显示效果 。'
          },
          {
            title: '昂教育的产品可以在哪里使用',
            desc: '昂 教育产品覆盖PC、ios、安卓、小程序等多个终端，让教育场景多样化，并且支持H5自适配，无论您在哪些设备上打开网站，都能给您极佳的显示效果 。'
          },
        ],

        // 权威认证
        certificateList: [
          { src: 'https://offical--img.oss-cn-beijing.aliyuncs.com/res/img/Luoying/zs1.png'},
          { src: 'https://offical--img.oss-cn-beijing.aliyuncs.com/res/img/Luoying/zs2.png'},
          { src: 'https://offical--img.oss-cn-beijing.aliyuncs.com/res/img/Luoying/zs3.png'},
          { src: 'https://offical--img.oss-cn-beijing.aliyuncs.com/res/img/Luoying/zs4.png'},
          { src: 'https://offical--img.oss-cn-beijing.aliyuncs.com/res/img/Luoying/zs5.png'},
          { src: 'https://offical--img.oss-cn-beijing.aliyuncs.com/res/img/Luoying/zs6.png'},
          { src: 'https://offical--img.oss-cn-beijing.aliyuncs.com/res/img/Luoying/zs7.png'},
          { src: 'https://offical--img.oss-cn-beijing.aliyuncs.com/res/img/Luoying/zs8.png'},
        ],

        scroll: 0

      }
    },

    methods: {


    },

    mounted() {
    }
  }
</script>

<style scoped>
  .home {
    margin-top: 3px;
  }
  .banner {
    width: 100%;
    height: 243px;
    overflow: hidden;
  }
  .banner a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  .banner-desc {
    position: relative;
    z-index: 11;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 45px 0;
  }
  .banner a img {
    width: 1024px;
    height: 100%;
    position: absolute;
    left: 50%;
    margin-left: -512px;
  }
  .banner-desc .title {
    width: 177px;
    height: 66px;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    line-height: 33px;
  }
  .banner-desc button {
    width: 131px;
    height: 36px;
    background-color: #1890ff;
    border-radius: 18px;
    margin-bottom: 5px;
  }
  .banner-desc p {
    font-size: 12px;
    text-align: center;
  }
  /*banner图*/
  >>> .banner .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
    width: 17px;
    height: 3px;
    border-radius: 3px;
    background-color: #fff;
    opacity: 0.49;
  }
  >>> .banner .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet-active {
    background-color: #fff;
    opacity: 1;
  }
  /*常见问答图*/

  >>> .FAQ .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #1890FF;
    opacity: 0.25;
  }
  >>> .FAQ .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet-active {
    background-color: #1890FF;
    opacity: 1;
  }

/*  main*/
  .effect {
    width: 100%;
    height: 323px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .effect .title h3,
  .effect .title h4{
    font-size: 20px;
    font-weight: 600;
    color: #333;
    text-align: center;
  }
  .effect .title h4 {
    margin-top: 10px;
  }
  .wx-system {
    padding: 35px 0 40px 0;
  }
  .enterprise-train {
    padding: 30px 0 41px 0;
    background-color: rgba(24,144,255,0.04);
  }
  .video-cloud {
    padding-top: 40px;
  }
  .hiker-btn {
    margin: 46px 0 40px 0;
    width: 100%;
    height: 42px;
    padding: 0 16px;
    display: flex;
    justify-content: center;
  }
  .hiker-btn-inner {
    width: 375px;
    height: 42px;
    display: flex;
    justify-content: space-between;
  }
  .hiker-btn button {
    width: 165px;
    height: 42px;
    border-radius: 22px;
    font-size: 14px;
    font-weight: 500;
  }
  .hiker-btn button:first-child {
    background:linear-gradient(90deg,rgba(24,144,255,1) 0%,rgba(53,195,255,1) 100%);
    color: #fff;
  }
  .hiker-btn button:last-child {
    color: #1890ff;
    border: 1px solid #1890ff;
  }

  .get-benefit {
    width: 100%;
    height: 455px;
    padding: 60px 28px 69px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background:rgba(24,144,255,0.04);
  }
  .get-benefit h3 {
    font-weight: 600;
    font-size: 20px;
    color: #333;
    text-align: center;
  }
  .benefit-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 248px;
  }
  .benefit-list > div {
    display: flex;
    justify-content: space-between;
  }
  .benefit-list > div > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 72px;
  }

  .industry {
    padding: 60px 2.87rem 20px;
  }
  .industry h3 {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin-bottom: 60px;
    text-align: center;
  }

  .industry-list ul li {
    text-align: center;
    line-height: 109px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 1.98rem;
    position: relative;
    padding: 0 1.05rem;
  }
  .industry-list ul li img {
    width: 100%;
    height: auto;
    display: block;
  }
  .industry-list ul li span {
    position: absolute;
    z-index: 1;
    left: 0;
    width: 100%;
    line-height: initial;
    top: 50%;
    margin-top: -10px;
  }

  .blue-bg {
    width: 100%;
    height: 35px;
    background:rgba(24,144,255,0.04);
  }

  .FAQ {
    padding: 27px 16px 60px;
    width: 100%;
    text-align: center;
  }
  .FAQ h3{
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    color: #333;
    text-align: center;
    margin-bottom: 50px;
  }
  .FAQ-inner {
    width: 343px;
    height: 295px;
    box-shadow:0px 6px 40px 0px rgba(213,213,213,0.5);
    border-radius:4px;
    border:1px solid rgba(244,244,244,1);
    padding: 55px 23px 0;
    margin: 0 auto 40px;
    text-align: center;
  }
  .FAQ-desc {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .question {
    height: 28px;
    margin-bottom: 33px;
  }
  .answer {
    height: 96px;
    align-items: flex-start!important;
    margin-bottom: 110px;
  }
  .FAQ-icon {
    width: 28px;
    height: 28px;
    border-radius: 14px;
    color: #fff;
    text-align: center;
    line-height: 28px;
  }
  .FAQ-inner p {
    width: 257px;
  }
  .q-title {
    font-size: 16px;
    font-weight: 500;
    color: #333;
    line-height: 22px;
  }
  .q-icon {
    background-color: #1890ff;
  }
  .a-icon {
    background-color: #4FD639;
  }
  .a-desc {
    font-size: 14px;
    color: #666;
    line-height: 24px;
    text-align: left;
  }

  .choose-hiker {
    padding: 50px 16px 79px ;
    background-color: #1890ff;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .choose-hiker h3 {
    font-size: 21px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 50px;
    text-align: center;
  }
  .choose-hiker ul {
    width: 375px;
    padding: 0 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .choose-hiker ul li {
    width: 104px;
    height: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: 16px;
    /*margin: 0 1.4rem 16px;*/
  }
  .certificate {
    width: 100%;
    height: 431px;
    padding: 61px 0 39px;
  }
  .certificate h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    text-align: center;
    color: #333;
    margin-bottom: 40px;
  }
  .certificate-inner {
    width: 100%;
    display: flex;
    padding-left: 45px;
  }
  .certificate-inner div {
    margin-right: 47px;
  }
  ::-webkit-scrollbar{
    display: none;
  }

  .gogogo {
    width: 100%;
    height: 178px;
    background-color: #1890ff;
    display: flex;
    justify-content: center;
  }
  .gogogo .go-inner{
    width: 375px;
    height: 178px;
    padding: 36px 44px 34px 43px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .go-inner ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .go-inner ul li {
    width: 50%;
    height: 20px;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  .go-inner ul li span {
    font-size: 14px;
    font-weight: 600;
    margin: 0 5px;
  }
  .go-inner ul li p {
    font-size: 12px;
    line-height: 17px;
  }
  .go-inner button {
    width: 288px;
    height: 34px;
    background-color: #fff;
    border-radius: 22px;
    color: #1890ff;
    font-size: 14px;
    font-weight: 500;
    font-family:PingFangSC-Medium,PingFang SC;
  }
</style>
