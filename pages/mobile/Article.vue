<template>
  <div class="top-main-cont ">
    <div class="dym-tab clearfix ">
      <a  href="javascript:void(0)" :class="{'cur':typeId == 0}" @click="queryArticleListByType(0)">全部资讯</a>
      <a v-for="(articleType, index) in articleTypeList" :key="index" href="javascript:void(0)" :class="{'cur':typeId == articleType.id}"
         @click="queryArticleListByType(articleType.id)">{{articleType.name}}</a>
    </div>
    <div class="hengxian"></div>
    <div class="inner" style="    max-width: 1011px;">
      <div class="clearfix of">
        <!-- /文章列表 开始 -->
            <div class="dym-article-box" >
              <!-- 标签 -->
              <ul class="of clearfix am-avg-sm-1 am-avg-md-1 am-avg-lg-1 am-thumbnails">
                <li class="dym-item-wrap" v-for="(article,index) in  articleList" :key="index" v-if="article.link">
                  <router-link :to="{path: article.link}"  class="" target="_blank">
                  <div class="news-list">
                    <div class="date-ball">{{article.createTime | dateFormat('yyyy年MM月dd日')}}</div>
                    <aside class="dym-at-pic" v-if="article.picture">
                      <img
                        :src="$store.state.commonStore.imagePath +  article.picture">
                    </aside>
                    <div :class=" (article.picture)?'news-detail':'no-picture'"  >
                      <p class="news-detail-title" v-if="article.title" :href="article.link"  target="_blank">
                       {{article.title}}
                      </p>
                      <p class="news-detail-desc" v-html="article.description">
                      </p>
                      <p class="news-detail-desc-bottom" >
                        <button class="seeMoreBtn ">立即查看 <i class="am-icon-angle-right"></i></button>
                      </p>
                    </div>
                  </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <!-- 公共分页 开始 -->
          <Page :pageContent="pageContent" ref="page" @goParentPage="queryArticlePage"/>
          <!-- 公共分页 结束 -->

        <!-- /文章列表 结束 -->
      </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Page from '~/components/page/Page'
  import NoDataIcon from '~/components/common/NoDataIcon'
  export default {
    name: "Article",
    components: {
      Page,NoDataIcon,
    },

    computed:{
      ...mapState(['info']),
      ...mapState("articleStore",['articleTypeList','articleList','pageContent','typeId']),
    },
    async fetch({params,store}){
      let typeId=0;
      if(params.typeId!=undefined && params.typeId>0){
        typeId = params.typeId;
      }
      return store.dispatch("articleStore/queryArticleIndex",{"typeId":typeId,"pageNumber":1});
    },
    data() {
      return {
        title: '资讯',
      }
    },
    head () {
      return {
        title: '新闻资讯_最新资讯|新闻动态|行业资讯|功能更新|公司动态-HIKER教育',
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content: '新闻资讯,最新资讯,新闻动态,行业资讯,功能更新,公司动态',
          },
          {
            hid: 'author',
            name: 'author',
            content: "HIKER教育",
          },
          {
            hid: 'description',
            name: 'description',
            content: '新闻资讯为hiker教育提供了最新的新闻内容，其中包括了行业资讯、功能更新以及公司动态'
          }
        ]
      }
    },
    methods: {
      async queryArticleListByType(typeId){
        await this.$store.dispatch("articleStore/queryArticleIndex",{"typeId":typeId,"pageNumber":1});
        this.$refs.page.showPageNumber();//调用分页的页码方法
      },
      queryArticlePage(number){
        this.$store.dispatch("articleStore/queryArticleIndex",{"typeId":this.typeId,"pageNumber":number});
        $(window).scrollTop(0);
      }

    },
    created() {

    }
    ,mounted() {
      this.$refs.page.showPageNumber();//调用分页的页码方法

    },

  }
</script>

<style scoped>
  .no-picture{
    width: calc(100% - 208px);padding-left: 0;
    height: 100%;
    overflow: hidden;
  }
  .dym-article-box{
    padding-top: 32px;
  }
  .news-detail{
    width: calc(100% - 464px);
    overflow: hidden;
    padding-left: 16px;
    height: 100%;
  }
  .news-detail-title{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size:2.4rem;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(34,34,34,1);
    opacity:1;

    margin-bottom: 0em;
  }
  .news-detail-title:hover{
    color: rgba(24, 144, 255, 1);
  }
  .news-detail-desc{
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-top: 8px;
    height: 66px;

    font-size:1.4rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height:22px;
    color:rgba(34,34,34,1);
    opacity:1;
  }

  .news-list{
    display: flex;
    align-items: center;
    width: 100%;
    /*background: white;*/
    overflow: hidden;

  }
  .date-ball{
  margin-right: 11.5%;
    width:78px;
    height:78px;
    background:rgba(24,144,255,1);
    border-radius:50%;
    opacity:1;

    font-size:2.2rem;
    font-family:PingFang SC;
    font-weight:400;

    color:rgba(255,255,255,1);
    opacity:1;
    display: inline-flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  .shuxian{
    border: 1px solid rgba(153,153,153,0.4);
    position: absolute;
  left: calc(50% - 454px);
    height: calc(100% - 1000px);
  }
  .hengxian{
    width:100%;

    border: 1px solid rgba(153,153,153,0.4);

  }
  .dym-tab {
    padding: 25px 0px 25px;
    /*border-bottom: 1px solid rgba(153,153,153,0.4);*/
    margin-left: calc(50% - 346px);
    /*text-align: end;*/
  }
  .dym-tab a {
    text-decoration:none;cursor:pointer;
    font-size:1.6rem;
    font-family:PingFang SC;
    font-weight:400;

    color:rgba(34,34,34,1);
    opacity:1;
      display: inline-block;
    margin-left: 6.4rem;}
  .dym-tab a:nth-child(1) {


    margin-left: 0;}
  .dym-tab a:hover,.dym-tab a.cur{color:rgba(24, 144, 255, 1);}
  .dym-tab a.cur::after{
    color: rgba(24, 144, 255, 1);
    content: '';
    display: block;
    height: 3px;
    background: #1890FF;
    width: 69px;
    margin-top: 23px;
    position: absolute;

  }
  .dym-tab a:nth-child(1).cur::after{
    color: rgba(24, 144, 255, 1);
    content: '';
    display: block;
    height: 3px;
    background: #1890FF;
    width: 65px;
    margin-top: 23px;
    position: absolute;

  }
  >>>.paging a.current {
    background-color: rgba(24,144,255,1);
    border: 1px solid rgba(24,144,255,1);
    color: #fff;
  }

  .index-header {
    background: #060814;
  }

  .top-main-cont {
    padding-top: 64px;
    background: #fff;
  }

  @media only screen and (max-width: 640px) and (min-width: 0px) {

    .top-main-cont {
      padding-top: 50px;
    }
  }

  @media only screen and (max-width: 1200px) and (min-width: 640px) {
    .top-main-cont {
      padding-top: 49px;
    }
  }

  .index-article-banner {
    width: 100%;
    position: relative;
    overflow: hidden;
    height: 249px;
    background: rgba(255, 255, 255, 1);

  }

  .index-article-banner a {
    width: 1920px;
    position: absolute;
    left: 50%;
    margin-left: -960px;
  }
  .index-article-banner a img{
    margin-top: -85px;

  }

  .index-article-bannerDescribe {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    /*background: rgba(0, 0, 0, 0.65);*/
    justify-content: center;
  }

  .bannerDescribeP1 {
    font-size: 4.2rem;
    font-family: PingFang SC;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    opacity: 1;
  }

  .bannerDescribeP2 {
    font-size: 3.4rem;
    font-family: PingFang SC;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    opacity: 1;
    margin-top: 3.5rem;
  }

  /*.hengxian {*/
  /*  width: 130px;*/
  /*  height: 8px;*/
  /*  background: rgba(24, 144, 255, 1);*/
  /*  opacity: 1;*/
  /*  margin: 25px 0 32px;*/
  /*}*/

  .dym-article-box ul li a {
    display: flex;
    /*flex-direction: column;*/
  }

  .dym-article-box ul {
    margin: 0 ;
  }

  .dym-article-box ul li {
    padding: 0 0 0 14px;

    border-bottom: none;
    margin: 32px 0;
  }

  .dym-at-pic {
    width: 256px;
    height: 171px;
    background: rgba(0,0,0,0);
    opacity: 1;
    overflow: hidden;
  }

  .dym-at-pic img {
    width: 100%;
    height: auto;
    border-radius: 0;
    margin: 0;
    overflow: unset;
    float: unset;
  }

  .dym-item-wrap .dym-desc {
    font-size: 14px;
    line-height: 22px;
    color: #222222;
    overflow: hidden;
    padding-top: 0;
    display: -webkit-box;
    word-break: break-all;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    height: 66px;
    margin-top: 16px;
  }

  .dym-desc-bottom {
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
    align-items: center;
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(34, 34, 34, 1);
    opacity: 1;
  }

  .seeMoreBtn.cur, .seeMoreBtn:hover {
    width: 102px;
    height: 36px;
    background: rgba(24, 144, 255, 1);
    opacity: 1;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    opacity: 1;
    border: none;
  }

  .seeMoreBtn {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #222222;
    opacity: 1;
    width: 102px;
    height: 36px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(51, 51, 51, 1);
    opacity: 1;
    float: right;
    margin-top: 22px;
  }

  .monthAndDate {
    font-size: 21px;
  }


  @media only screen and (max-width: 1300px) and (min-width: 0px) {

  }
  @media only screen and (max-width: 768px) and (min-width: 640px){
    .dym-tab {
      display: flex;
      justify-content: space-around;
      margin-left:0;
    }

    .dym-tab a {

      margin-left: 0;
    }
  }

  @media only screen and (max-width: 640px) and (min-width: 0px) {
    .dym-tab {
      /*padding: 19px 0px 20px;*/
      display: flex;
      justify-content: space-around;
      margin-left:0;
    }

    .dym-tab a {

      margin-left: 0;
    }
    .dym-article-box ul {
      margin: 0 4%;
    }
  }
  @media only screen and (max-width: 1024px) and (min-width: 640px){

    .dym-article-box ul {
      margin: 0 4%;
    }

  }
  @media only screen and (max-width: 1400px) and (min-width: 1024px){

    .dym-article-box ul {
      margin: 0 ;
    }

  }

  @media only screen and (max-width: 1023px) and (min-width: 640px){
    .date-ball{

      margin-right: 5.5%;
    }
    .dym-at-pic {
      width: 32%;
      max-height: 171px;

    }
    .news-detail {
      width: calc(100% - 340px);
    }
    .shuxian {
      border: 1px solid rgba(153,153,153,0.4);
      position: absolute;
      left: calc(4% + 50px);
      height: calc(100% - 550px);
    }

  }
  @media only screen and (max-width: 640px) and (min-width: 0px){
    .news-list{
      flex-wrap: wrap;

    }
    .date-ball {
      /*margin-right: 50%;*/
      width: 50px;
      height: 50px;
      /*background: rgba(24,144,255,1);*/
      border-radius: 50%;
      opacity: 1;
      font-size: 1.8rem;
      position: absolute;
      width: 66px;
      border-radius: 10px;
      height: 40px;
      bottom: 0px;
      background: white;
      color: #000;
    }
    .dym-at-pic{
      width: 100%;
      margin: 7px auto;
      max-height: 391px;
      height: auto;

    }
    .news-detail{
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
      padding-left: 0;
      height: 100%;
    }
    .dym-article-box ul li {

      margin: 18px 0;
    }
    .no-picture[data-v-5542f45d] {
      width: calc(100% );

    }
    .dym-tab a.cur::after {

      width: 4rem;

    }
    .dym-tab a:nth-child(1).cur::after {

      width: 5rem;

    }
    .no-picture{
       width: 100% ;
      padding-right: 14px;

    }

  }

</style>
