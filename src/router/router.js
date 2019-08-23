import Home from '../views/Home.vue'
export default [
  {
    path: '/',
    name: 'home',
    alias: '/home_page',  //别名 --- url可以输入home_page显示home页面
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    //这里的from表示上一页路由对象
    // beforeEnter: (to, from, next) => {
    //   if (from.name === 'about') alert('从about过来')
    //   else alert('这不是从about过来')
    //   next()
    // }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: {
      food: 'banana'
    },
    meta: {
      title: 'lin'
    }
  },
  {
    path: '/argu/:name',   //如果是这样定义，那么可以用编程时导航 this.$router.push({ name: 'argu', params:{ name: 'lin'} }) 浏览器会显示 /argu/lin
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true    //只有设置 props为true 页面中才能使用props来获取值
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    //命名视图的加载方式：default为默认视图加载
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    //重定向
    path: '/main',
    // redirect: '/'     //第一种方式
    // redirect: {
    //   name: 'home'       //命名路由的方式
    // }
    redirect: to => {
      // console.log(to)
      // fullPath: "/main"
      // hash: ""
      // matched: [{…}]
      // meta: {}
      // name: undefined
      // params: {}
      // path: "/main"
      // query: {}
      // __proto__: Object
      //可做逻辑判断
      // return {
      //   name: 'home'   //路径对象或者字符串路径
      // }
      return '/'

      // ES6可以简写为
      // redirect: to => '/'
    }
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')  //一定要放在末尾，因为路由匹配优先级的原因
  }

]
