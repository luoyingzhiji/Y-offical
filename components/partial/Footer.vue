<template>
  <footer>
    <div class="web-footer am-show-lg-up">
      <div class="inner ">
        <div class="top ">
          <!-- 一堆文字 -->
          <div class="company-intro ">
            <div class="product-center ">
              <ul class="news lx">
                <li style="margin-bottom: 16px">
                  <h6>新闻资讯</h6>
                </li>
                <li v-for="(article,index) in articleList" :key="index">
                  <a :href="article.link.replace('a', 'article')" target="_blank" v-html="article.title"></a>
                </li>
                <div class="float-between"  style="margin-top: 32px" >
                    <div style="text-align: center" ><img :src="imagePath + '/res/img/Luodi/gaoxing.png'" alt="" style="    display: inline-block;width: 34px;height: 41px" >
                    <div style="width:112px;height:20px;font-size:14px;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#dddedf;line-height:20px;" >国家高薪技术企业</div>
                    </div>
                    <div style="text-align: center" ><img :src="imagePath + '/res/img/Luodi/gaoxing022x.png'" alt="" style="    display: inline-block;width: 96px; height: 42px" >
                    <div style="width:112px;height:20px;font-size:14px;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#dddedf;line-height:20px;  width:126px; " >中关村高新技术企业</div>
                </div>
                </div>
              </ul>
              <ul>
                <li style="margin-bottom: 16px">
                  <h6>公司介绍</h6>
                </li>
                <li><a href="/about">关于我们</a></li>
                <li><a href="javascript:void(0); ">加入我们</a></li>

                <li><a href="/article">新闻资讯</a></li>
              </ul>
              <ul>
                <li style="margin-bottom: 16px">
                  <h6>售后帮助</h6>
                </li>
                <li><a href="javascript:void(0)">技术支持</a></li>
<!--                <li><a href="/help?id=234">服务条款</a></li>-->
                <li><a href="javascript:void(0)">服务条款</a></li>
                <li><a href="https://m.eduhiker.com" target="_blank">演示模板</a></li>
              </ul>
              <ul class="lx">
                <li style="margin-bottom: 16px">
                  <h6>联系我们</h6>
                </li>

                <li><a href="javascript:void(0); "><i class="icon iconfont">&#xe602;</i><span class="footerTitle">客服电话：</span><p class="footerContent">400-8866-736</p></a></li>
                <li><a href="javascript:void(0); "><i class="icon iconfont">&#xe6f5;</i><span class="footerTitle">联系邮箱：</span><p class="footerContent">tim@eduhiker.com</p></a></li>
<!--                <li><a href="/address"><i class="icon iconfont">&#xe6ba;</i><span class="footerTitle">联系地址：</span><p class="footerContent">北京市海淀区新龙大厦B座718室</p></a></li>-->
                <li><a href="javascript:void(0); "><i class="icon iconfont">&#xe6ba;</i><span class="footerTitle">联系地址：</span><p class="footerContent">北京市海淀区新龙大厦B座718室</p></a></li>

              </ul>
              <div class="fl">
                <div class="guanzhuwomen-bg">
                  <img :src="$store.state.commonStore.imagePath+'/res/img/hikerCompanyIndex/guanzhuwomen.png'" alt="">
                </div>
                <p class="guanzhuwomen-txt">微信公众号</p>
              </div>
            </div>

            <div class="contact-us ">

            </div>

          </div>
          <!-- 友情链接 -->
          <div class="blogroll ">

            <p>
              友情链接：
              <a v-for="(tabNavigate,index)  in tabNavigateList" :key="index" :href="tabNavigate.url" :target="tabNavigate.newPage=='0'?'_blank':'_self'">{{tabNavigate.name}}&nbsp;</a>

              <!--  -->
            </p>
          </div>
        </div>
        <!-- 版权信息 -->
        <div class="copyright ">
          <div class="footer-logo ">
            <img :src="$store.state.commonStore.imagePath+'/res/img/index/footer-logo.png'" alt=" ">
          </div>
          <div class="webInfo">
            Copyright © 2017-2020 | 版权所有北京新辰金创科技有限公司 | 京ICP备17063345号-1  Powered by HIKER教育 工作时间 09:00-21:00

            <div style="position: absolute;right:115px;top: 0px;">
             <!-- <script type="text/javascript">let cnzz_protocol = "https://";document.write(unescape("%3Cspan id='cnzz_stat_icon_1271265934'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s13.cnzz.com/z_stat.php%3Fid%3D1271265934%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));</script>
          -->  </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-footer am-hide-lg-up">

      <!-- 版权信息 -->
      <div class="copyright">

        <div class="webInfo">
         版权所有北京新辰金创科技有限公司
        </div>
      </div>
      <div class="footer-btns">
        <a href="tel:4008866736" class="am-hide-md-up">
          <i class="am-icon-commenting-o"></i>
          <span>点击咨询</span>
        </a>
        <a href="https://www.eduhiker.com/trial">
          <i class="am-icon-pencil-square-o"></i>
          <span>申请试用</span>
        </a>
      </div>
    </div>

  </footer>


</template>

<script>

import { mapState } from 'vuex'
  export default {
    name: 'Footer',

    components: {
    },
    computed:{
      ...mapState(['tabNavigateList','censusCodeString']),
      ...mapState('commonStore',['headerIndex','imagePath']),
    },
    data () {
      return {
        articleList:[],

      }
    },
    methods: {
      showImg(index){
        if(index==1){
          console.log("aaa");
        }
        if (index==2) {
          console.log("aaa");
        }
      },
      hideImg(index){
        if(index==1){

        }
        if (index==2) {

        }
      }
    },created: function() {



    },mounted:function(){
//统计代码
      let string=this.censusCodeString.replace(/#/g,"<")
      string=string.replace(/@/g,">")
      let path = window.document.location.pathname;
      this.path=path;
      if (path.indexOf('/admin')==-1){
        $('body').append(string);
      }

      this.$httpPost('/mainPath/ajax/article/index','').then((result) =>{
        if(result.success){
          this.articleList = result.entity;
        }
      });

    }
  }
</script>
<style>
  @import "@/assets/css/NewBanner.css";
  .inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .guanzhuwomen-bg {
    margin: 36px 40px 20px 5px;
  }
  .guanzhuwomen-bg img{
    width:124px;
  }
  .guanzhuwomen-txt{
    width:124px;
    text-align: center;
    color: #fff;
  }

  footer .wechat li:hover {
    width: 172px;
    height: 40px;
    border: 1px solid rgba(24,143,255,1);
    opacity: 1;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 25px;
    cursor: pointer;
    color: white;
  }
  footer .company-intro ul li a:hover {
     color: rgba(24,143,255,1);
   }
  footer .company-intro ul li:hover  i  {
    color: rgba(24,143,255,1);
  }
  footer .company-intro ul li:hover .footerTitle {
    color: rgba(24,143,255,1);
  }
  footer .company-intro ul li:hover .footerContent {
    color: rgba(24,143,255,1);
  }


  /* <!-- 公共 尾栏 --> */
  footer {background-color: #000;}
  .inner {max-width: 1200px;margin: 0 auto;}

  /* <!-- 片尾 - 一堆文字 --> */
  footer .company-intro {padding:80px 0px 60px;overflow: hidden;}
  footer .company-intro ul li {padding: 6px 0px;    text-align: center;}

  footer .company-intro .lx li {text-align: left;}
  footer .company-intro ul li i{
    margin-right: 10px;
    font-size: 1.4rem;
    color: #909091;

  }
  footer .company-intro ul li .footerTitle{
    color: #F4F4F4;
  }
  footer .company-intro ul li .footerContent{
    color: #909091;
  }
  footer .company-intro ul li img {width: 100%;}

  footer .company-intro ul li a {color:#999;font-size: 1.4rem;}
  footer .company-intro ul li h6 {color:rgba(255,255,255,1);font-size: 1.6rem;}
  footer .product-center {float: left;}
  footer .product-center ul {float: left;margin-right: 95px;}
  footer .product-center ul p {margin:0px;}
  footer .product-center .news {margin-left: 0px;margin-right: 84px;}
  footer .product-center .news li{}
  footer .product-center .news li a{
    width:280px; overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/color:#999;font-size: 1.4rem;display:block;}
  footer .contact-us {float: left;
    /*margin-left: 160px;*/
  }
  footer .wechat {float: right;    position: relative; cursor: pointer;}
  footer .wechat  li{
    width:172px;
    height:40px;
    border:1px solid rgba(144,144,145,1);
    opacity:1;
    border-radius:5px;
    text-align: center;
    margin-bottom: 25px;
    cursor: pointer;
  }

  /*footer{*/
  /*    margin-bottom: 72px;*/
  /*}*/
  /* <!-- 片尾 - 友情链接 --> */
  footer .blogroll {width: 100%;float: left;text-align: center;padding: 20px 0px;border-bottom: 1px solid #333;}
  footer .blogroll p {word-spacing: 20px;color: #fff;font-size: 12px;}
  footer .blogroll p a {color: #999;font-size: 12px;}
  footer .blogroll p a:hover {color: #fff;}

  /* <!-- 片尾 - 版权信息 --> */
  footer .copyright .footer-logo img {display: block;padding: 20px 0px 10px;margin: 0 auto;text-align: center;}
  footer .copyright .copy {text-align: center;padding: 0px 0px 20px;color: #686868;}


  @media only screen and (max-width: 1400px) and (min-width: 0px) {
    footer .product-center ul {margin-right: 70px;}
    .inner {max-width: 1100px;}
  }
  @media only screen and (max-width: 1024px) and (min-width: 641px) {
    /*footer .wechat {display: none;}*/
    footer .contact-us {float: right;margin-left: 0px;}
    .inner {max-width: 768px;}
  }



  @media only screen and (max-width: 640px) and (min-width: 0px) {

    footer .footer-btns {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 50px;
      z-index: 99;
    }
    footer .footer-btns {
      display: block;
    }
  }
  /* <!-- 片尾 - 移动吨 - 版权信息 --> */
  @media only screen and (max-width: 640px) and (min-width: 0px) {
    footer .mobile-footer {background-color: #000;margin-bottom: 50px;overflow: hidden;}
    footer .footer-btns {position: fixed;bottom: 0;width: 100%;height: 50px;}
    footer .footer-btns a{display: block;float: left;width: 50%;height: 50px;line-height: 50px;color: #fff;background-color: #2a75ed;text-align: center;}
    footer .footer-btns a:first-child{border-right: 1px solid #1259cc;}
    footer .footer-btns a:last-child{border-left: 1px solid #8ab5fc;}
    footer .footer-btns span {font-size: 2.4rem;vertical-align: middle;}
    footer .footer-btns i {font-size: 3.2rem;vertical-align: middle;}
  }

</style>

