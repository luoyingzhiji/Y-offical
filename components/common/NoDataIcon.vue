<template>
    <!-- 公共无数据提示 -->
        <section class="pt30 mt50 mb30 tac none-data">
            <img src="../../assets/no-data-icon.png" class="vam" style="width: 90px; height: 87px" >
            <span class="c-666 fsize14 ml10 vam" v-html="message"></span>
        </section>
</template>
<script>
    export default {
        name: "NoDataIcon",
        props:['message'],
        data() {
            return {

                shopPath: this.$shopPath,

            }
        },
    }
</script>
