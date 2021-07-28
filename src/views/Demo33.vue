<template>
  <div>
    <UserName4 :name="name" />
  </div>
</template>

<script>
import UserName4 from '@/components/UserName4.vue'

export default {
  name: 'Demo33',
  components: {
    UserName4
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
