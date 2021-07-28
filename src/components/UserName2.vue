<template>
  <div>
    <p>my name is {{ userName }}</p>
    <input v-model="userName" type="text" title="" />
  </div>
</template>

<script>
export default {
  name: 'UserName2',
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
  created: function() {
    this.userName = this.name
  }
}
</script>
