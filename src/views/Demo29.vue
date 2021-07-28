<template>
  <div>
    <div @click="test1">
      <button @click.stop="test2">点击</button>
    </div>

    <br />

    <input type="text" title="" @keyup.enter="test2" />
  </div>
</template>

<script>
export default {
  name: 'Demo29',
  methods: {
    test1() {
      console.log('test1')
    },
    test2() {
      console.log('test2')
    }
  }
}
</script>

<style scoped></style>
