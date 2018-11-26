<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="list.length">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  export default {
    name: "HomeSwiper",
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: 3000
        }
      }
    }
  }
</script>
<style scoped lang="stylus" type="text/stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.5%
    background: #ccc
    .swiper-img
      width: 100%
</style>
