<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">

        <div class="slide-item" v-for="(item, index) in slides" :key="index">

          <a :href="item.href" :target="item.target">
            <transition name="slide-fade">
            <img v-if="index==nowIndex" :src="item.src" ref="bannerImg"/>
            </transition>
          </a>

        </div>

    </div>
    <ul class="slide-pages">
      <li v-for="(item, index) in slides"
          @click="goto(index)"
      >
        <a :class="{on: index === nowIndex}"></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      slides: {
        type: Array,
        default: []
      },
      inv: {
        type: Number,
        default: 1000
      }
    },
    data () {
      return {
        nowIndex: 0,
      }
    },
    computed: {
      prevIndex () {
        if (this.nowIndex === 0) {
          return this.slides.length - 1
        }
        else {
          return this.nowIndex - 1
        }
      },
      nextIndex () {
        if (this.nowIndex === this.slides.length - 1) {
          return 0
        }
        else {
          return this.nowIndex + 1
        }
      }
    },
    methods: {
      goto (index) {
        setTimeout(() => {
          this.nowIndex = index
        }, 10)
      },
      runInv () {
        this.invId = setInterval(() => {
          this.goto(this.nextIndex)
        }, this.inv)
      },
      clearInv () {
        clearInterval(this.invId)
      },
      initBanner(){
        setTimeout(()=>{
          if(this.$refs.bannerImg!=undefined&&this.$refs.bannerImg[0].height>0){
            $(".slide-img").css("height",this.$refs.bannerImg[0].height);
          }else{
            this.initBanner();
          }
        },100);
      }
    },
    mounted () {
      this.runInv();
      this.initBanner();
      $(window).on('resize',()=>{
          if(this.$refs.bannerImg!=undefined){
            $(".slide-img").css("height",this.$refs.bannerImg[0].height);
          }
      })
    }
  }
</script>

<style scoped>
  .slide-show{
    margin-bottom:2px;
    position:relative;
    width:100%;
    max-width:100%;
    text-align:center;
  }
  .slide-img{
    position:relative;
    list-style:none;
    overflow:hidden;
    width:100%;
    padding:0;
    margin:0;
    border-radius: 8px;
  }
  .slide-img li{
    position: relative;
    display: block;
    float: left;
  }
  .slide-item{
    display: block;
    overflow: hidden;

    position: absolute;
  }
  .slide-img img {
    display: block;
    position: relative;
    z-index: 1;
    height: auto;
    width: 100%;
    border: 0;
  }
  .slide-title{
    margin-top: -40px;
    position: relative;
    z-index: 99;
    height: 40px;
    margin-bottom: 20px;
    opacity: .5;

  }
  .slide-title a{
    width: 70%;
    line-height:40px;
    color:#fff;
    opacity: 1;
    display: block;
    float: left;
    text-align: left;
    background: #2C3E50;
    padding-left: 20px;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
  }
  @media screen and (max-width:600px){
    .slide-title a{
      width: 40%;
    }
  }
  .slide-pages{
    text-align: center;
    margin: -45px 20px 20px 0;
    position: relative;
    z-index: 100;
  }
  .slide-pages li {
    display: inline-block;
    position: relative;
  }
  .slide-pages li a{
    display: block;
    width: 12px;
    height: 12px;
    margin-left: 5px;
    border-radius:12px;
    border: 1px solid #FFF;
    cursor: pointer;
  }
  .slide-pages li .on{
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 5px;
    border-radius: 12px;
    position: relative;
    background: #fff;
  }
  .callbacks-nav{

  }
  .callbacks-nav:active{opacity:1.0;}
  .slide-show:hover .callbacks-nav{display:block;}
  .callbacks-nav:hover{
    opacity:0.7;
  }
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */ {
    opacity: 0;
  }
</style>
