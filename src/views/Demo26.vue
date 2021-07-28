<template>
  <div :style="heightStyle">测试</div>
</template>

<script>
export default {
  name: 'Demo26',
  computed: {
    heightStyle() {
      // const height = window.innerHeight / 2 - 100;
      const height = `${window.innerHeight / 2 - 100}px`
      return { height: height }
    }
  }
}
</script>

<style scoped>
div {
  width: 800px;
  background: antiquewhite;
}
</style>
