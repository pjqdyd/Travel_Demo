<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item"
        :ref="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick">
      {{item}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "CityAphabet",
    props: {
      cities: Object
    },
    computed: {
      letters () {
        const letters = []
        for(let i in this.cities){
          letters.push(i)
        }
        return letters
      }
    },
    data () {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    updated () {
      //A字母元素距头部的距离
      this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
      handleLetterClick(e) {
        this.$emit('change',e.target.innerText)
      },
      handleTouchStart () {
        this.touchStatus = true
      },
      handleTouchMove (e) {
        if(this.touchStatus){
          if(this.timer){
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            //当前字母距顶部的距离-头部高度 (距头部距离)
            const touchY = e.touches[0].clientY - 79
            //俩字母间的距离除以字母的高度 (字母在数组的下标)
            const index = Math.floor((touchY - this.startY) / 20)
            if(index >= 0 && index < this.letters.length){
              this.$emit('change', this.letters[index])
            }
          }, 20)
        }
      },
      handleTouchEnd () {
        this.touchStatus = false
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
