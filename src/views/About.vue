<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b>{{ food }}</b>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    props: {
      food: String,
      default: 'apple'
    }
  }
</script>

<style lang="less" scoped>

</style>

