<template>
  <div>
    <p>my name is {{ userName }}</p>
    <input v-model="userName" type="text" title="" />
  </div>
</template>

<script>
export default {
  name: 'UserName3',
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
    name: function(val) {
      this.userName = val
    }
  },
  created: function() {
    this.userName = this.name
  }
}
</script>
