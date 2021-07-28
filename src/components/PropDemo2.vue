<template>
  <div>
    <p @click="changeParentData">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'PropDemo',
  props: {
    msg: String
  },
  methods: {
    changeParentData: function() {
      this.$emit('changeData', '修改父组件的值')
    }
  }
}
</script>

<style scoped></style>
