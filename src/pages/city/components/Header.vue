<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont header-back">&#xe624</div>
    </router-link>
    城市选择
  </div>
</template>

<script>
  export default {
    name: "CityHeader"
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  @import '~styles/varibles.styl'
  .header
    overflow: hidden
    position: relative
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-back
      width: .64rem
      text-align: center
      font-size: .4rem
      position: absolute
      top: 0
      left: 0
      color: #fff
</style>
