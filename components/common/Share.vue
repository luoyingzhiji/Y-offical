<template>


  <div class="bdsharebuttonbox bdshare-button-style1-24" id="bdshare"
       data-bd-bind="1548670838594">
    <a class="shareFont">分享</a>

    <a data-cmd="qzone" class=" bgSet bds_qzone am-icon-qq" href="#" title="分享到QQ空间"></a>
    <a data-cmd="weixin" class="bgSet bds_weixin am-icon-wechat" href="#" title="分享到微信"></a>
    <a data-cmd="tsina" class=" bgSet bds_tsina am-icon-weibo" href="#" title="分享到新浪微博"></a>
  </div>
</template>

<script>
    export default {
        name: "Share",

        data(){
          return {}
        },
        methods:{
          setShare() {
            //分享相关代码
            window._bd_share_config = {
              "common": {
                "bdSnsKey": {},
                "bdText": "",
                "bdMini": "1",
                "bdMiniList": false,
                "bdPic": "",
                "bdStyle": "1",
                "bdSize": "24"
              }, "share": {}
            };

            const s = document.createElement("script");
            s.type = "text/javascript";
            s.src ="/static/api/js/share.js?v=89860593.js?cdnversion=" +
              ~(-new Date() / 36e5);
             document.body.appendChild(s);

          }
        },
        created() {

        },
        mounted() {
          const that = this;
          setTimeout(() => {
            that.setShare();
          }, 100);
        }

    }
</script>

<style scoped>

</style>
