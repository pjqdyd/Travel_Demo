<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    data () {
      return {
        recommendList: [{
          id: '0001',
          title: '万达主题乐园',
          desc: '红古滩风景区,旅游胜地',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1610/83/83a873f755d64992a3.water.jpg_200x200_f7acbacd.jpg'
        },{
          id: '0002',
          title: '金燕国际温泉',
          desc: '国际旅游的首选温泉池',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/63/6340336461c16842a3.img.png_200x200_ac63191b.png'
        },{
          id: '0003',
          title: '北极天幕温泉',
          desc: '极地温泉,让你欲罢不能',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1410/21/67f72f6b54ede94fae27e32d6ba92ae5.jpg_200x200_e85f5596.jpg'
        },{
          id: '0004',
          title: '文化旅游城',
          desc: '感受中国文化的魅力',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1705/1c/1c9ea91d1d73e159a3.water.jpg_200x200_7d604203.jpg'
        },]
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  @import "~styles/mixins.styl"
  .recommend-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rex
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
