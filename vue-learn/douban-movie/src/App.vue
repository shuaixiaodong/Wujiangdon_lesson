<template>
  <div id="app">
    <!-- 头部 -->
    <TheHeader />
    <div class="content">
      <!-- 保持当前页面状态 -->
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style lang="stylus" scoped>
.content
  position absolute
  top 66px
  bottom 0
  width 100%
</style>
