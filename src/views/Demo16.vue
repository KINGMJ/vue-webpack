<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import store from '@/store1'

export default {
  name: 'Demo16',
  computed: {
    count() {
      return store.state.count
    }
  },
  methods: {
    increment: function() {
      store.commit('increment')
    },
    decrement: function() {
      store.commit('decrement')
    }
  }
}
</script>

<style scoped></style>
