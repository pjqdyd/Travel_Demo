<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           src="http://img1.qunarzz.com/sight/p0/1711/63/6340336461c16842a3.img.png_600x330_327ce8a2.png"/>
      <div class="banner-info">
        <div class="banner-title">南昌金燕国际温泉</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>23</div>
      </div>
    </div>

    <common-gallary :imgs="imgs" v-show="showGallary"
                    @close="handleGallaryClose">
    </common-gallary>
  </div>
</template>
<script>
  import CommonGallary from 'common/gallary/Gallary'
  export default {
    name: "DetailBanner",
    data() {
      return {
        showGallary: false,
        imgs: [
          'http://img1.qunarzz.com/sight/p0/1712/c8/c897cb5da7d9c54da3.img.jpg_r_800x800_04894822.jpg',
          'http://img1.qunarzz.com/sight/p0/1712/60/607f03ebc8c97f28a3.img.jpg_r_800x800_c9a9bb66.jpg',
          'http://img1.qunarzz.com/sight/p0/1712/d8/d8b6adcb5d0fcd84a3.img.jpg_r_800x800_3221199f.jpg']
      }
    },
    methods: {
      handleBannerClick () {
        this.showGallary = true
      },
      handleGallaryClose () {
        this.showGallary = false
      }
    },
    components: {
      CommonGallary
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .3rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        line-height: .32rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          margin-right: .2rem
          font-size: .24rem
</style>
