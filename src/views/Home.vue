<template>
  <div class="home">
    <b>{{ food }}</b>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  props: {
    food: {
      type: String,
      default: 'lina'
    },
  },

  beforeRouteEnter (to, from, next) {
    // console.log(to.name)
    // next()
    //此时无法用this获取实例，可以采用如下方式
    next(vm => {
      console.log(vm)
    })
  },
  //很有用       还有一个 beforeRouteUpdate 在argu.vue中演示
//   beforeRouteLeave (to, from, next) {
//     const leave = confirm('您确定要离开吗')
//     if (leave) next()
//     else next(false)
//  },
  components: {
    HelloWorld
  },
  methods: {
    // handleClick() {
    //   this.$router.go(-1)  //$router是路由实例，main.js中挂载的router。  返回上一页还可以$router.back();go(-1)后退一页，go(1)前进一页
    // }
    handleClick (type) {
      if (type === 'back') {
        this.$router.back()
      }else if (type === 'push') {
        // const name = 'lin'
        this.$router.push({
          // path: `argu/${name}` // !!！如果使用path，下面再使用query会导致query无效
          name: 'argu',             //除了命名路由方式还可以使用字符串--this.$router.push('/parent')
          // query: {
          //   name: 'lison'
          // }
          params: {
            name: 'lin'
          }

        })
      } else if (type === 'replace') {
        this.$router.replace({
          name: 'parent'         //replace跟浏览器历史记录有关，比如上一页是about，当前为home，点击替换到replace，将替换home的历史记录，点击浏览器回退按钮将回到about
        })
      }
    }
  },
}
</script>
