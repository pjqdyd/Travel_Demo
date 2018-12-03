<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="contation"></div>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'

  export default {
    name: 'Detail',
    components: {
      DetailBanner,
      DetailHeader
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .contation
    height: 50rem
</style>
