<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement({ amount: 10 })">-</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Demo19',
  computed: {
    ...mapState(['count'])
  },
  methods: {
    increment: function() {
      this.$store.commit({
        type: 'increment',
        amount: 10
      })
    },

    ...mapMutations(['decrement'])
  }
}
</script>

<style scoped></style>
