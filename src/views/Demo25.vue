<template>
  <div>
    <p ref="testP">测试</p>
    <button ref="testButton" @click="getDom">获取dom</button>
  </div>
</template>

<script>
export default {
  name: 'Demo25',
  methods: {
    getDom() {
      console.log(this.$refs.testP)
      console.log(this.$el)
    }
  }
}
</script>
