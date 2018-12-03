<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="swiper-img" :src="item"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
  export default {
    name: "CommonGallary",
    props: {
      imgs: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',  //数字/分页
          observeParents: true, //表示监听父级Dom元素结构变化,刷新一次swiper
          observer: true  //表示监听自身Dom元素结构变化,刷新一次swiper,解决计算分页问题
        }
      }
    },
    methods: {
      handleGallaryClick () {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  .container >>> .swiper-container
    overflow: inherit  /* 防止在图片下的分页内容被隐藏 */
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      .swiper-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
