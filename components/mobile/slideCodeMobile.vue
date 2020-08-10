<template>
  <div class="SlideCode">
    <div class="slide-code-inner">
      <div class="slide-head clearFix">
        <h2>请完成安全验证</h2>
        <span class="close-slide" @click="closeBtn()">
            <img :src="imagePath + '/res/img/close-icon.png'" width="13" height="13" alt="">
          </span>
      </div>
      <div class="photo" v-show="!loading">
        <img :src="bigImage" alt="" width="277" height="162">
        <img :src="smallImage" alt="" style="position: absolute;z-index: 40" ref="smallImg">
        <img :src="imagePath + '/res/img/refresh-icon.png'" alt="" width="20" height="20" class="refresh" @click="refreshBtn">
      </div>
      <div class="photo loadingClass" v-show="loading">
        <img :src="imagePath + '/res/img/loading-icon.png'" width="33" height="32" alt="">
        <p>加载中</p>
      </div>
      <div class="slide">
        <p style="position: relative;z-index: 40;">{{ currentStateText }}</p>
        <div class="already-sliding-box" ref="alreadySlidingBox" style="z-index: 30"></div>
        <div class="slide-box defaultBox" ref="defaultSlideBox"
             @touchstart="startSlide" @touchmove="moveSlide" @touchend="endSlide"
             style="z-index: 50;" v-if="this.isSuccess == -1">

        </div>
        <div class="slide-box failBox" style="z-index: 50;" v-if="this.isSuccess == 0">

        </div>
        <div class="slide-box successBox" style="z-index: 50;" v-if="this.isSuccess == 1">

        </div>
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

    data () {
      return {
        title: '注册',
        bigImage: '',
        smallImage: '',
        loading: true, // 加载中
        currentStateText: '向右拖动滑块填充拼图',
        isSuccess: -1,
        xWidth: '', // 滑块滑动的距离

        minutes: 0,

        startX: '',
        endX: '',
        disX: '',
      }
    },

    head() {
      return {
        title: this.info.title + "-" + this.title,

      }
    },

    methods: {
      // 关闭验证框
      closeBtn () {
        this.$parent.isSlideCode = false
      },

      // 刷新图片
      refreshBtn () {
        this.loading = true
        this.currentStateText = '加载中'
        // 初始化
        this.isSuccess = -1;
        let aBox = this.$refs.alreadySlidingBox

        aBox.style.border = '1px solid #A6CEFF'
        aBox.style.backgroundColor = '#EBF4FF'
        aBox.style.width = 10 + 'px';

        setTimeout(() => {
          this.$refs.defaultSlideBox.style.left = 10 + 'px';
        },0)

        let that = this
        setTimeout( () => {
          that.getImage()
        },400)
      },

      // 滑动滑块5秒未操作清除事件
      time () {
        this.minutes ++
        setTimeout(() => {
          if(this.minutes < 5) {
            this.time()
          } else {
            document.onmousemove = null;
            this.minutes = 0;
          }
        }, 1000)
      },

      // 开始位置
      startSlide (e) {
        e.preventDefault()
        console.log(e)
        this.startX = e.touches[0].clientX
        console.log(this.startX,'开始的位置')
      },

      // 移动的距离
      moveSlide (e) {

        let a = e.target; // 获取目标元素
        let aBox = this.$refs.alreadySlidingBox; // 获取已滑动的区域
        let smallImg = this.$refs.smallImg; // 获取小图片

        let moveX = e.changedTouches[0].clientX
        this.disX = ~~(moveX - this.startX)

        a.style.left = this.disX + 'px'; // 滑块
        smallImg.style.left = this.disX + 'px'; // 小照片
        aBox.style.width = this.disX + 'px'; // 已滑动的区域
      },

      //
      endSlide (e) {
        console.log(11111)
        e.target.remove('touchmove')
        this.queryIsSuccess()
      },

      queryIsSuccess () {
        this.$httpPost('/mainPath/web/check/image?x=' + this.disX).then(result => {
          if(result.success) {
            console.log(result)
          }
        })
      },

      // 结束位置
      endSlide (e) {
        // console.log(e,'---')
        // this.endX = e.touches[0].clientX
      },

      // 获取图片
      getImage () {
        this.$httpPost('/mainPath/web/getImage').then((result) => {
          if(result.success) {
            this.loading = false
            this.currentStateText = '向右拖动滑块填充拼图';

            this.bigImage = result.entity.bigImage;
            this.smallImage = result.entity.smallImage;

            let smallImg = this.$refs.smallImg;

            // 定位小图片的位置
            smallImg.style.top = result.entity.top + 'px';
            smallImg.style.left = 10 + 'px';

          }
        })
      },


    },
    mounted () {
      this.refreshBtn()
    },

  }
</script>
<style scoped>
  .SlideCode {
    width: 100%;
    height: 100%;
    position:fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    background: rgba(0,0,0,.2);
  }
  .slide-code-inner {
    width: 317px;
    height: 306px;
    border-radius: 8px;
    background-color: #fff;
    position: absolute;
    top: 30%;
    left: 50%;
    margin-left: -153px;
    padding: 20px 20px 25px 20px;
  }
  .slide-head {
    height: 25px;
    line-height: 25px;
    margin-bottom: 20px;
  }
  .slide-head h2 {
    float: left;
    color: #333;
    font-size: 18px;
    font-weight: 500;
  }
  .slide-head span {
    float: right;
    vertical-align: center;
  }
  .close-slide img {
    margin-top: 6px;
    cursor: pointer;
  }
  .photo {
    width: 277px;
    height: 162px;
    margin-bottom: 15px;
    position: relative;
    background-color: #f4f4f4;
    overflow: hidden;
  }
  .photo .refresh {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
    z-index: 99;
  }

  .slide {
    width: 277px;
    height: 39px;
    background-color: #e4e4e4;
    border:1px solid #e7e7e7;
    font-size: 14px;
    color: #666;
    line-height: 39px;
    text-align: center;
    position: relative;
  }
  .slide-box {
    width: 39px;
    height: 39px;
    border-radius: 2px;
    position: absolute;
    top: 0;
    left: 10px;
    cursor: pointer;

  }
  .defaultBox {
    background: url('https://offical--img.oss-cn-beijing.aliyuncs.com/res/img/arrow-icon.png') no-repeat;
  }
  .failBox {
    background: url('https://offical--img.oss-cn-beijing.aliyuncs.com/res/img/arrow-fail.png') no-repeat;
  }
  .successBox {
    background: url('https://offical--img.oss-cn-beijing.aliyuncs.com/res/img/arrow-success.png') no-repeat;
  }

  .slide-box img {
    margin-top: 13px;
    margin-left: 12px;
  }
  .already-sliding-box {
    width: 12px;
    height: 39px;
    border: 1px solid #A6CEFF;
    background-color: #EBF4FF;
    position: absolute;
    top: 0;
    z-index: 50;
  }
  .loadingClass img {
    margin-top: 60px;
    margin-left: 122px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
      transition: all 2s;
    }
  }

  .loadingClass p {
    font-size: 11px;
    color: #999;
    margin-top: 7px;
    text-align: center;
  }
</style>
