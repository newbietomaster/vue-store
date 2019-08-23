<template>
  <div>
    parent
    <button @click="back">回退上一页</button>
    <router-view/>
  </div>
</template>

<script>
  export default {
    methods: {
      back() {
        this.$router.back()
      }
    },

  }
</script>

<style lang="scss" scoped>

</style>
