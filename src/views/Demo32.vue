<template>
  <div>
    <UserName3 :name="name" />
  </div>
</template>

<script>
import UserName3 from '@/components/UserName3.vue'

export default {
  name: 'Demo32',
  components: {
    UserName3
  },
  data: () => {
    return {
      name: 'Jack'
    }
  },
  methods: {}
}
</script>

<style scoped></style>
