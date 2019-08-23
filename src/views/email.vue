<template>
  <div>
   <button @click="handleClick">点击传值</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      handleClick() {
        this.$bus.$emit('on-click', 'hello')
      }
    },
    mounted () {
      console.log(this.$bus)
    },
  }
</script>

<style lang="scss" scoped>

</style>
