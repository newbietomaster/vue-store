<template>
  <div>
    <!-- {{ $route.params.name}} -->
    <!-- $route表示当前加载页面的路由对象 -->
    {{ name }}
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: {
      name: String,
      default: 'lin'
    },
    //这个路由守卫是组件自身被重用时才会触发的路由钩子 history模式下不生效
    beforeRouteUpdate (to, from, next) {
      console.log(to.name, from.name)

    }
  }
</script>

<style lang="less" scoped>

</style>
