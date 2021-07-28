<template>
  <div>
    <p>{{ msg }}</p>
    <button @click="changeMsg">改变</button>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.prototype.msg = '123'

export default {
  name: 'Demo15',
  components: {},
  data: () => {
    return {}
  },
  methods: {
    changeMsg: function() {
      this.msg = 456
    }
  },
}
</script>

<style scoped></style>
