<template>
  <div>
    <p>{{ message }}</p>
    <button @click="reverseMessage">逆转消息</button>
  </div>
</template>

<script>
export default {
  name: 'Demo4',
  data: () => {
    return {
      message: 'Hello Vue.js!'
    }
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
}
</script>
