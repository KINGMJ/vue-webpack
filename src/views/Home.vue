<!--Demo的主页面-->
<template>
  <div class="container">
    <img src="../assets/logo.png" />
    <HelloVue msg="基于 vue2.x 构建的 demo" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloVue from '@/components/HelloVue.vue'

export default {
  name: 'Home',
  components: {
    HelloVue
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 40px 0 0;
  padding: 0 20px;
  text-align: center;
}
</style>
