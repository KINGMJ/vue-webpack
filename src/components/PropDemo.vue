<template>
  <div>
    <p @click="changeProp">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'PropDemo',
  props: {
    msg: String
  },
  data: function() {
    return {
      message: this.msg
    }
  },
  methods: {
    changeProp: function() {
      this.message = '我需要修改 prop 传递过来的值'
    }
  }
}
</script>

<style scoped></style>
