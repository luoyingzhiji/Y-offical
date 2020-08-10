<template>
  <!-- 公共分页 开始 -->
  <div class="paging" v-if="pageContent!= null && pageContent.totalResultSize>0&&pageContent.totalPageSize>0">
    <a href="javascript:void(0)" class="page-side" :class="{'undisable':pageContent.currentPage<=1}" v-on:click="goPage(1)">首</a>
    <a href="javascript:void(0)" :class="{'undisable':pageContent.currentPage<=1}" v-on:click="goUpPage()"><i class="am-icon-angle-left"></i></a>

    <a href='javascript:void(0)' v-for="(item,index) in pageNo" :class="{'current':item==pageContent.currentPage}" :key="index" v-on:click="goPage(item)">{{item}}</a>


    <a href="javascript:void(0)" :class="{'undisable':pageContent.currentPage>=pageContent.totalPageSize}" v-on:click="goDownPage()"><i class="am-icon-angle-right"></i></a>
    <a class="page-side" :class="{'undisable':pageContent.currentPage>=pageContent.totalPageSize}" href="javascript:void(0)" v-on:click="goPage(pageContent.totalPageSize)">末</a>
    <div class="clear"></div>
  </div>
  <!-- 公共分页 结束 -->
</template>

<script>

  export default {
    name: 'page',
    props:{
      pageContent:{},
    },
    data () {
      return {
        pageNo: [],
      }
    },
    methods: {
      goUpPage(){
        if(this.pageContent.currentPage-1>0) {
          this.goPage(this.pageContent.currentPage - 1);
        }
      },
      goDownPage(){
        if(this.pageContent.currentPage<this.pageContent.totalPageSize){
          this.goPage(this.pageContent.currentPage+1);
        }
      },
      goPage(number){
        let totalPageSize=this.pageContent.totalPageSize;
        this.$emit('goParentPage',number);
      },
      showPageNumber() {
        let pageNoArray=[];
        let currentPage=this.pageContent.currentPage;
        let totalPageSize=this.pageContent.totalPageSize;
        let maxNum_new = currentPage > 4 ? 6 : 7 - currentPage;//最大显示页码数
        let discnt = 1;
        for ( let i = 3; i > 0; i--) {
          if (currentPage > i) {
            pageNoArray.push(currentPage - i);
            discnt++;
          }
        }
        pageNoArray.push(currentPage);
        for ( let i = 1; i < maxNum_new; i++) {
          if (currentPage + i <= totalPageSize && discnt < 7) {
            pageNoArray.push(currentPage + i);
            discnt++;
          } else {
            break;
          }
          ;
        }
        this.pageNo=pageNoArray;
      }
    },created: function() {
    },mounted:function(){


    }
  }
</script>
