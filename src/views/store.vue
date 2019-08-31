<template>
  <div>
    <input v-model="stateValue">
    <p>{{stateValue}} ---></p>
    <p>{{appName}}</p>
    <p>{{userName}} first is {{first}}</p>
    <p>{{vesion}}</p>
    <button @click="changeAppName">点击</button>
  </div>
</template>

<script>
import { mapState, mapGetters,mapMutations } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user')
  export default {
    name: 'store',
    data() {
      return {
        inputValue: ''
      }
    },
    computed: {
      /**
       * 数组形式
       */

      // ...mapState([
      //   'appName'
      // ])

      /**
       * 对象形式
       */
      // ...mapState({
      //   appName: state => state.appName,
      //   userName: state => state.user.userName
      // })

      //如果模块使用了命名空间，使用下列方式
      ...mapState('user',{
        userName: state => state.userName,

      }),
      ...mapState({
        appName: state => state.appName,
        sValue: state => state.stateValue
      }),
      /**
       * mapGetters的用法
       */
      ...mapGetters([
        'vesion'
      ]),
      ...mapGetters('user',[
        'first'
      ]),
      stateValue: {
        get() {
          // return this.$store.state.stateValue
          return this.sValue
        },
        set(value) {
          this.SET_INPUT_VALUE(value)
        }
      }
    },
    methods: {
      ...mapMutations([
        'SET_APPNAME',
        'SET_INPUT_VALUE'
      ]),
      changeAppName() {
        this.SET_APPNAME({
          appName:'linguihuang'
        })
      },
      changeInputqq(event) {
        this.SET_INPUT_VALUE(event.target.value)
      }
    },
  }
</script>

<style lang="less" scoped>

</style>
