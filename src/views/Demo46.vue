<template>
  <div>
    <input v-model="input" type="text" @keydown.enter="handleEnter" />
    <el-input v-model="input" @keydown.enter.native="handleEnter"></el-input>

    <input v-model="input" type="text" @keydown.13="handleEnter" />
    <el-input v-model="input" @keydown.13.native="handleEnter"></el-input>
  </div>
</template>

<script>
export default {
  name: 'Demo46',
  data() {
    return {
      input: ''
    }
  },
  methods: {
    handleEnter() {
      console.log('触发了enter事件')
    }
  }
}
</script>
