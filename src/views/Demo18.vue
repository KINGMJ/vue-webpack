<template>
  <div>
    <p>{{ upperHello }}</p>
    <p>{{ helloVue }}</p>
    <p>{{ findBook(1) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Demo18',
  computed: {
    ...mapState(['count', 'color', 'fontSize']),
    ...mapGetters(['upperHello', 'helloVue', 'findBook'])
  },
  methods: {}
}
</script>

<style scoped></style>
