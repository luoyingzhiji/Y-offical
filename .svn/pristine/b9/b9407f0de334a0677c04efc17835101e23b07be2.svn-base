<template>
  <div>
    <div class="article-nav">
     <div class="article-nav-content">
       <p class="article-nav-title">用户新体验</p>
       <p class="article-nav-subTitle">新用户注册即可体验14天网校系统后台</p>
       <nuxt-link to="/trial" class="article-nav-button">了解详情</nuxt-link>
     </div>
      <img src="../static/res/img/Luodi/experience.png" width="350" height="259" alt="用户新体验"/>
    </div>
    <div class="article-read">
      <p>点击排行</p>
      <ul v-for="(item,index) in this.rankList">
        <li >
          <a :href="item.link.replace('/a', '/article')" :class="'u1s'+ (index+1) ">
            <span class="num">{{index+1}}</span>
            <span>{{item.title}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="article-rank" v-show="isshow" style="margin-bottom: 30px;">
      <p>相关阅读</p>
      <ul v-for="(item,index) in this.rankList">
        <li class="rank">
          <a :href="item.link.replace('/a', '/article')" :class="'u1s'+ (index+1) ">
          <span class="sjx"></span>
          <span>{{item.title}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

  export default {
    props:{
      isshow:Boolean,
    },
    name: "Article",

    data() {
      return {
        title: '资讯',
        rankList:[],
        aaa:[
          {
            cont:12312312312
          },
          {
            cont:12312312312
          },
          {
            cont:12312312312
          },
          {
            cont:12312312312
          },{
            cont:12312312312
          },{
            cont:12312312312
          },
          {
            cont:12312312312
          },
          {
            cont:12312312312
          },



        ]
      }
    },
    methods:{
    queryArticleInfo() {
      this.$httpPost('/mainPath/web/article/ranking').then((result) => {
        if (result.success) {
          this.rankList=result.entity.articleList;
          console.log(result.entity,'点击排行')
        }
      });
    },
      goInfo(){
        this.$router.push({ path: this.rankList.link })
      }
  },
  mounted(){
    this.queryArticleInfo()
  }



  }
</script>
<style scoped>
   .article-right{
    width: 350px
  }
   .article-rank{
     width: 350px;
     height: 392px;
     background: #fff;

   }
   .rank{
     font-size: 14px;
     height: 20px;
   }
   .article-rank p{
     width: 85px;
     height: 28px;
     font-size: 21px;
     line-height: 28px;
     padding: 10px 0;
     margin: 0 0 30px 20px;
     font-size:21px;
     font-family:PingFangSC-Semibold,PingFang SC;
     font-weight:600;
     color:rgba(51,51,51,1);
     line-height:28px;
   }
   .article-rank ul{
     margin-left: 20px;

   }
   .article-read>ul:last-child>li{
     margin-bottom: 15px;
   }
   .article-rank ul li{
     margin-bottom: 20px;
     font-size: 14px;
   }
   .sjx{
     /*margin-right: 5px;*/
     margin-top: 5px;
     /*margin-left: 4px;*/
     float: left;
     width: 0;
     height: 0;
     border-width: 8px;
     border-style: solid;
     border-color: transparent #f5f5f5 transparent transparent;
     transform: rotate(180deg);
   }
   .article-rank ul li>a>span:nth-child(2){
     width: 285px;
     height: 22px;
     display: block;
     font-size: 14px;
     font-family: PingFangSC-Regular,PingFang SC;
     font-weight: 400;
     color: rgba(102,102,102,1);
     line-height: 20px;
     overflow: hidden;
     white-space: nowrap;
     text-overflow: ellipsis;
     /* overflow: hidden; */
     cursor: pointer;
     float: right;
     margin-right: 25px;
   }
 .article-read{
    width: 350px;
    padding-bottom: 5px;
    background: #fff;
    padding-top: 15px;
    margin-top:30px;
   margin-bottom: 30px;

  }
.article-read p{
    width: 85px;
    height: 28px;
    font-size: 21px;
    line-height: 28px;
    margin: 0px 0 15px 20px;
    font-size:21px;
    font-family:PingFangSC-Semibold,PingFang SC;
    font-weight:600;
    color:rgba(51,51,51,1);
    line-height:28px;
  }
 .article-read ul{
    margin-left: 20px;

  }
 .article-read ul li{
    margin-bottom: 20px;
    font-size: 14px;
  }
 .article-read ul li>a>span:nth-child(2){
   width: 285px;
   height: 22px;
   display: block;
   font-size: 14px;
   font-family: PingFangSC-Regular,PingFang SC;
   font-weight: 400;
   color: rgba(102,102,102,1);
   line-height: 20px;
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
   /* overflow: hidden; */
   cursor: pointer;
   float: right;
   margin-right: 25px;
 }
 .num{
    margin-right: 9px;
  }

  .article-nav{
    background-size: 350px 259px;
    height: 259px;
    width: 350px;
    position: relative;
  }
  .u1s1>.num{
    color:rgba(255, 0, 0, 1)
  }
  .u1s2>.num{
    color:rgba(255, 0, 0, 1)
  }
  .u1s3>.num{
    color:rgba(255, 0, 0, 1)
  }

    .article-content p {

     font-size: 14px;
     font-family: PingFang SC;
     font-weight: 400;
     line-height: 32px;
     color:#666;
     letter-spacing: 2px;
     opacity: 1;
     text-align: left;

   }
    .article-nav-content{
      width: 350px;
     position: absolute;
      left: 0;
      top: 64px;

   }
  .article-nav-title{
      height: 33px;
     font-size: 24px;
     font-weight: 600;
    text-align: center;
     color: #fff;
   }
    .article-nav-subTitle{
      height: 20px;
      margin-top: 10px;
      text-align: center;
     color: #fff;
     font-size: 14px;
   }
 .article-nav-button{
   display: block;
    margin-top: 47px;
     width: 132px;
     height: 44px;
   text-align: center;
   line-height: 44px;
     background: #fff;
     border-radius: 26px;
     color: #999;
     font-size: 16px;
    margin-left: 109px;
   }
.article-content img {

     max-width: 100%;

   }
</style>
