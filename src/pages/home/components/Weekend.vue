<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="border-bottom" v-for="item of WeekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeWeekend",
    data() {
      return {
        WeekendList: [{
          id: '0001',
          title: '七彩摩天轮',
          desc: '感受夜晚灯光的绚丽色彩',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/bd/688c12889af7ad.jpg_r_640x214_cc490c32.jpg'
        }, {
          id: '0002',
          title: '天山温泉',
          desc: '你没有玩过的温泉池',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1510/de/2c2ca6e158f80f.jpg_r_640x214_2385de27.jpg'
        }, {
          id: '0003',
          title: '北海道草原',
          desc: '平静的世界一极草原',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/49/4917c5b8d400d5b890.img.jpg_640x276_94c1abd2.jpg'
        }, {
          id: '0004',
          title: '文化旅游城',
          desc: '感受中国文化的魅力',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201311/05/23daced01bd5072fc8d65eac.jpg_640x276_5a546be0.jpg'
        },]
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  @import "~styles/mixins.styl"
  .weekend-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32 rex
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
