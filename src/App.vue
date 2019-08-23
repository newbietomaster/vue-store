<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->

      <!-- 命名路由的跳转方式 -->
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link>
    </div>
    <!-- 高级用法--如下所示,name为表达式,通过watch实现给想要动画的视图添加动画  普通用法-- name="router" -->
    <transition-group :name="routerTransition">
      <router-view key="default"/>
      <!-- 命名视图的使用 -->
      <router-view name="email" key="email"></router-view>
      <router-view name="tel" key="tel"></router-view>
    </transition-group>

  </div>
</template>
<script>
export default {
  data() {
    return {
      routerTransition: ''
    }
  },
  watch: {
    '$route' (to) {
      to.query && to.query.transitionName && (this.routerTransition = to.query.transitionName)
      // to.meta && (this.routerTransition = 'router')  //添加逻辑为需要动画的视图添加动画
    }
  }
}
</script>

<style lang="less">
.router-enter{ //页面还没显示，即将要显示
  opacity: 0;
  transform: translate(-100%,0);
}
.router-enter-active{ //页面从刚开始到显示完全的过程，定义动画
  transition: all .5s ease;
}
.router-enter-to{ //页面显示完成的状态
  opacity: 1;
  transform: none;
}
.router-leave{
  opacity: 1;
}
.router-leave-active{
  transition: opacity .5s ease;
}
.router-leave-to{
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
