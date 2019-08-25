import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import  { setTitle } from '../lib/util.js'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

const HAS_LOGING = true
// to,from 都是路由对象,to表示即将跳转的页面的路由对象，from表示当前页面的路由对象，next是函数，当确定要跳转页面就用到该函数
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGING) next()
    else next({ name: 'login'})
  }else {
    if (HAS_LOGING) next({ name: 'home'})
    else next()
  }
})


/**
 * 1.导航被触发
 * 2.在失活的组件 (即将离开的页面组件) 里调用离开守卫 beforeRouteLeave
 * 3.调用全局的前置守卫 beforeEach
 * 4.在重用的组件里调用 beforeRouteUpdate
 * 5.调用路由独享守卫 beforeEnter
 * 6.解析一步路由组件
 * 7.在被激活的组件 (即将进入的页面组件) 里调用beforeRouteEnter
 * 8.调用全局的解析守卫 beforeResolve
 * 9.导航被确认
 * 10.调用全局的后置守卫 afterEach
 * 11.触发DOM更新
 * 12.用创建好的实例调用beforeRouteEnter守卫里传给next的回调函数
 */


export default router
