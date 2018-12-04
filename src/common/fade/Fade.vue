<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
    export default {
        name: "Fade"
    }
</script>

<style scoped lang="stylus" type="text/stylus">
  .v-enter, v-leaver-to
    opacity: 0
  .v-enter-active, .v-leave-active
    transition: opacity .5s
</style>
