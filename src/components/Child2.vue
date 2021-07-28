<template>
  <div>
    <p>This is child</p>
    <button @click="destroyComponent">组件内部销毁</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Child2',
  updated: function() {
    console.log('销毁了会执行吗?')
  },
  destroyed: function() {
    console.log('组件被销毁')
  },
  methods: {
    destroyComponent: function() {
      this.setShow(false)
    },
    ...mapMutations(['setShow'])
  }
}
</script>

<style scoped></style>
