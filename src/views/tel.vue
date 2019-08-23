<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: ''
      }
    },
    mounted() {
      this.$bus.$on('on-click', mes => {
        this.message = mes
        console.log(this.$bus)
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
