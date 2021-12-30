<template>
  <div>
    <p>my name is {{ userName }}</p>
    <input v-model="userName" type="text" title="" />
  </div>
</template>

<script>
export default {
  name: 'UserName4',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      userName: ''
    }
  },
  watch: {
    name: {
      handler: function(val) {
        this.userName = val
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
