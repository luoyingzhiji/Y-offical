<template>
  <div class="reg">
    <div class="reg-inner">
      <div class="top">
        <img :src="imagePath + '/res/img/mobile/mobile-logo.png'" width="110" height="27" alt="">
      </div>
      <div class="main">
        <h3>免费注册</h3>
        <div class="main-desc">
          <div v-show="!isNextPage">
            <div class="tel ipt" style="margin-top: 50px;">
              <input type="text" placeholder="您的手机号" v-model="mobile" onkeyup="value=value.replace(/[^\d]/g,'')" >
            </div>
            <div class="code ipt">
              <input type="text" placeholder="您的验证码" v-model="code">
              <button @click="sendMobileCode">获取验证码</button>
            </div>
            <div class="password ipt">
              <input type="password" v-model="pwd" placeholder="设置密码(8-20个字，包含字母和数字)">
            </div>
          </div>
          <div v-show="isNextPage">
            <div class="name ipt" style="margin-top: 50px;">
              <input type="text" placeholder="您的昵称" v-model="name">
            </div>
            <div class="company-name ipt">
              <input type="text" placeholder="公司名称" v-model="companyName">
            </div>
            <div class="industry ipt" @click="closeIndustry">
              <p :style="{'color': (isActive == -1 ? '#B1B4BD' : '#333')}">{{ industryText }}</p> <span style="color:#B1B4BD">></span>
            </div>
            <div class="industry ipt" @click="closeProType">
              <p :style="{'color': (isActive1 == -1 ? '#B1B4BD' : '#333')}">{{ productType }}</p> <span style="color:#B1B4BD">></span>
            </div>
          </div>

          <p><a href="https://m.eduhiker.com/admin" target="_blank">去登录</a></p>

          <button class="next-btn" v-show="!isNextPage" @click="nextPage">下一步</button>
          <button class="next-btn" v-show="isNextPage">完成注册</button>

          <div class="agreement">
            <span @click="agreeClick" style="position: relative">
              <i v-if="!isAgree"></i>
              <img v-else src="@/static/res/img/mobile/yse-icon.png" width="14" height="14" alt=""
                    style="position: absolute;left: -1px;top: -1px">
            </span>
            我已阅读并接受<a href="/help/234" target="_blank">《HIKER服务协议》</a>
          </div>

          <div class="chooseIndustry" v-show="isHide">
            <div class="chooseIndustry-inner">
              <div class="title">
                <h3>请选择公司行业</h3>
                <span @click="closeIndustry">关闭</span>
              </div>
              <ul>
                <li v-for="(item, index) in chooseIndustryList" @click="chooseIndustry(index)" :key="index"
                    :class="{'isCurrentChooseIndustry': index === isActive}">
                  {{ item.name }}
                </li>
              </ul>
            </div>
          </div>

          <div class="chooseIndustry" v-show="isHide1">
            <div class="chooseProType-inner">
              <div class="title">
                <h3>请选择产品类型</h3>
                <span @click="closeProType">关闭</span>
              </div>
              <ul>
                <li v-for="(item, index) in chooseProductTypeList" @click="chooseProductType(index)" :key="index"
                    :class="{'isCurrentChooseIndustry': index === isActive1}">
                  {{ item.name }}
                </li>
              </ul>
            </div>
          </div>

          <div class="prompt-box" style="display: none">
            <div class="dialogWrap">
              {{ errorInfo }}
            </div>
          </div>
          <div class="bMask" style="display: none"></div>

        </div>

        <!--      滑块验证码-->
        <SlideCodeMobile v-show="isSlideCode"></SlideCodeMobile>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import SlideCodeMobile from '~/components/mobile/SlideCodeMobile';
  export default {
    name: 'register',
    layout: 'white',
    components: {
      SlideCodeMobile
    },
    computed:{
      ...mapState(['info']),
      ...mapState('commonStore',['headerIndex','imagePath']),
    },

    head () {
      return {
        htmlAttrs: {
          id: 'root-directory1'
        },
      }
    },

    data () {
      return {
        mobile: '',
        code: '',
        pwd: '',
        name: '',
        companyName: '',

        industryText: '选择公司行业',
        isActive: -1,

        productType: '选择产品类型',
        isActive1: -1,

        isNextPage: false,
        isAgree: false,
        isHide: false,
        isHide1: false,

        chooseIndustryList: [
          {name: '金融教育'},
          {name: '企业培训教育'},
          {name: '会计培训教育'},
          {name: '留学语言教育'},
          {name: 'K12成长教育'},
          {name: '传媒服务教育'},
          {name: '工程培训教育'},
          {name: '艺术教育'},
          {name: '司法教育'},
          {name: '高校教育'},
          {name: '政府教育'},
          {name: '医学教育'},
          {name: '其他'},
        ],
        chooseProductTypeList: [
          {name: '租赁'},
          {name: '授权'},
          {name: '源码'}
        ],

        errorInfo: '',

        isSlideCode: true, // 是否滑块验证
      }
    },

    methods: {
      agreeClick () {
        this.isAgree = !this.isAgree
      },
      // 提示框
      dialog(text) {
        $('.prompt-box').show()
        $('.bMask').show()
        this.errorInfo = text
        setTimeout(() => {
          $('.prompt-box').hide()
          $('.bMask').hide()
        },1500)
      },

      // 获取验证码
      sendMobileCode() {

        if(this.mobile == '') {
          this.dialog('请输入手机号');
          return
        }

        if(this.mobile.length != 11) {
          this.dialog('请输入正确的手机号');
          return
        }


        this.isSlideCode = true
        this.$children[0].refreshBtn()

      },

      // 下一步
      nextPage () {
        if(this.mobile == '' || this.mobile == null){
          this.dialog('请输入手机号')
          return;
        }
        let reg=/^1[23456789][0-9]{9}$/; //验证手机正则
        if(reg.test(this.mobile)==false){//格式不正确
          this.dialog('请输入正确的手机号')

          return;
        };
        if(this.pwd == '' || this.pwd == null){
          this.dialog('请输入密码')
          return;
        }
        if(this.pwd.length < 6 || this.pwd == null){
          this.dialog('请输入正确的密码')
          return
        }

        this.isNextPage = !this.isNextPage
      },

      closeIndustry () {
        this.isHide = !this.isHide
      },

     // 选择行业
      chooseIndustry (index) {
        this.isActive = index
        this.industryText = this.chooseIndustryList.filter( (item, i) => {
          if(i == index) { return item }
        })[0].name;
        this.closeIndustry()
      },

      closeProType () {
        this.isHide1 = !this.isHide1
      },

      // 选择产品类型
      chooseProductType (index) {
        this.isActive1 = index;
        this.productType = this.chooseProductTypeList.filter((item, i) => {
          if(i == index) { return item }
        })[0].name;
        this.closeProType()
      },
    }
  }
</script>

<style scoped>
  .prompt-box {
    width: 295px;
    height: 50px;
    position: fixed;
    top: 40%;
    z-index: 9999999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bMask {
    background: #000;
    opacity: .3;
    filter: alpha(opacity=30);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9990
  }
  .dialogWrap {
    box-shadow: rgba(7, 17, 27, 0.1) 0px 4px 8px 0px;
    padding: 10px 15px;
    background: rgba(0,0,0,.4);
    border-radius: 14px;
    color: #fff;
    font-size: 14px;
  }
  .reg {
    width: 100%;
    padding: 73px 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .reg-inner {
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .top {
    width: 295px;
    height: 27px;
  }
  .main {
    width: 295px;
    margin-top: 50px;
  }
  .main h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    color: #262C3A;
    text-align: center;
  }
  .main .ipt {
    width: 295px;
    margin-top: 40px;

  }
  .code {
    position: relative;
  }
  .main input {
    width: 295px;
    border: none;
    border-bottom: 1px solid #eee;
    font-size: 14px;
  }
  .code button {
    position: absolute;
    right: 0;
    top: 0px;
    width: 90px;
    height: 30px;
    border-radius: 4px;
    color: #1890ff;
    background-color: rgba(24, 144, 255, 0.09);
  }
  .main-desc > p{
    width: 100%;
    height: 14px;
    text-align: right;
    font-size: 14px;
    line-height: 14px;
    margin-top: 16px;
  }
  .main-desc > p a {
    color: #1890ff;
  }
  .next-btn {
    width: 295px;
    height: 46px;
    background-color: #1890ff;
    border-radius: 23px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    margin-top: 40px;
  }
  .agreement {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #9698A2;
    margin-top: 21px;
    line-height: 14px;
  }
  .agreement span {
    width: 14px;
    height: 14px;
    border-radius: 7px;
    border: 1px solid #979797;
    margin-right: 6px;
  }
  .agreement a {
    color: #1890ff;
  }
  ::-webkit-input-placeholder{
    color: #B1B4BD;
  }
  .industry {
    position: relative;
    padding: 10px;
    font-size: 14px;
    border-bottom: 1px solid #eee;
  }
  .industry span {
    position: absolute;
    right: 10px;
    top: 15px;
  }
  .chooseIndustry {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
  }
  .chooseIndustry-inner {
    position: absolute;
    bottom: 0;
    width: 375px;
    height: 297px;
    background: #fff;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    box-shadow:0px 0px 8px 0px rgba(227,227,227,0.5);
  }
  .chooseProType-inner {
    position: absolute;
    bottom: 0;
    width: 375px;
    height: 197px;
    background: #fff;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    box-shadow:0px 0px 8px 0px rgba(227,227,227,0.5);
  }
  .chooseIndustry .title {
    width: 100%;
    height: 55px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .chooseIndustry .title h3 {
    font-size: 14px;
    font-weight: 500;
    color: #262C3A;
  }
  .chooseIndustry .title span {
    position: absolute;
    top: 18px;
    right: 22px;
    color: #AEAEAE;
    font-size: 14px;
  }
  .chooseIndustry ul {
    width: 100%;
    height: 240px;
    overflow: auto;
    margin: 4px 0 0;
    padding-bottom: 10px;
  }
  ::-webkit-scrollbar{
    display: none;
  }
  .chooseIndustry ul li {
    height: 46px;
    line-height: 46px;
    text-align: center;
    color: #262C3A;
    font-size: 14px;
  }

  .isCurrentChooseIndustry {
    background-color: rgba(24, 144, 255, .1);
    font-weight: 500;
    color: #1890ff!important;
  }
</style>
