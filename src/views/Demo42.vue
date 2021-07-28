<template>
  <div>
    <input type="text" @keydown.13="testKeyDown" />
    <input type="text" @keydown.enter="testKeyDown" />
  </div>
</template>

<script>
export default {
  name: 'Demo42',
  data() {
    return {
      input: '',
      dialogVisible: false
    }
  },
  methods: {
    testKeyDown() {
      console.log('会一直输出吗')
    }
  }
}
</script>
