<template>
  <div>
    <p>{{ message }}</p>
    <input v-model="message" title="" />
  </div>
</template>

<script>
export default {
  name: 'Demo5',
  data: () => {
    return {
      message: 'Hello Vue.js!'
    }
  }
}
</script>
