<template>
  <PropDemo :msg="msg" />
</template>

<script>
import PropDemo from '@/components/PropDemo.vue'

export default {
  name: 'Demo13',
  components: {
    PropDemo
  },
  data: () => {
    return {
      msg: '传递一个属性给子组件'
    }
  }
}
</script>

<style scoped></style>
