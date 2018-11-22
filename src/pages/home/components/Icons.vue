<template>
  <div class="icons">
    <swiper  :options="swiperOption">

      <swiper-slide v-for="(page,index) of Pages" :key="index">

        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"/>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </div>

      </swiper-slide>
    </swiper>

  </div>
</template>

<script>
  export default {
    name: "HomeIcons",
    data () {
      return {
        swiperOption: {},
        iconList: [{
          id: '0001',
          desc: '景点门票',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },{
          id: '0002',
          desc: '本地玩乐',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png'
        },{
          id: '0003',
          desc: '名胜风景',
          imgUrl: 'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png'
        },{
          id: '0004',
          desc: '一日游',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
        },{
          id: '0005',
          desc: '游乐场',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png'
        },{
          id: '0006',
          desc: '泡温泉',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png'
        },{
          id: '0007',
          desc: '世界必游',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'
        },{
          id: '0008',
          desc: '节日景点',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ec/0e1e0238e24ba02.png'
        },{
          id: '0009',
          desc: '万达乐园',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png'
        }]
      }
    },
    computed: {
      Pages () {
        const pages = []
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if(!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    overflow: hidden
    height: 0
    padding-bottom: 50%
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-desc
      position: absolute
      left: 0
      right: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>
