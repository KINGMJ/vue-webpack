<template>
  <PropDemo2 :msg="msg" @changeData="changeData" />
</template>

<script>
import PropDemo2 from '@/components/PropDemo2.vue'

export default {
  name: 'Demo14',
  components: {
    PropDemo2
  },
  data: () => {
    return {
      msg: '传递一个属性给子组件'
    }
  },
  methods: {
    changeData: function(data) {
      this.msg = data
    }
  },
}
</script>

<style scoped></style>
