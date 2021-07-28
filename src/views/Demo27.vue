<template>
  <div>
    <button @click="show = false">组件销毁</button>
    <p v-if="show" @click="show = false">假设是一个模态框</p>
  </div>
</template>

<script>
export default {
  name: 'Demo27',
  data: () => {
    return {
      show: true
    }
  },
  updated: function() {
    console.log('会执行吗?')
  },
  destroyed: function() {
    console.log('组件被销毁')
  }
}
</script>

<style scoped></style>
