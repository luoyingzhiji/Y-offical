<template>
  <div class="top-main-cont">
    <div class="container">
      <div class="i-cour-box clearfix of mt20 course-wrap-box" style="min-height: 400px;padding-top:150px;">

        <section>

          <section class="pt30 mb30 tac">
            <img src="../../assets/no-data-icon.png" class="vam" width="90" height="87">
            <span class="c-666 fsize14 ml10 vam">{{msg}}</span>
            <span class="c-666 fsize14 ml10 vam"><a href="/" class="c-666" style="text-decoration:underline; ">去首页</a></span>
          </section>

        </section>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MsgContent",
        data () {
          return {
            title:'提示',
            msg:'暂无提示',
          }
        },
        created(){
          this.msg = this.$route.query.msg;
        },
    }
</script>

<style scoped>

</style>
