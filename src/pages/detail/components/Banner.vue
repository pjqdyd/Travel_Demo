<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg"/>
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>

    <fade>
      <common-gallary :imgs="gallaryImgs" v-show="showGallary"
                      @close="handleGallaryClose">
      </common-gallary>
    </fade>
  </div>
</template>
<script>
  import CommonGallary from 'common/gallary/Gallary'
  import Fade from 'common/fade/Fade'

  export default {
    name: "DetailBanner",
    props: {
      sightName: String,
      bannerImg: String,
      gallaryImgs: Array
    },
    data() {
      return {
        showGallary: false
      }
    },
    methods: {
      handleBannerClick() {
        this.showGallary = true
      },
      handleGallaryClose() {
        this.showGallary = false
      }
    },
    components: {
      CommonGallary,
      Fade
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
