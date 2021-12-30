<template>
  <div>
    <UserName2 :name="name" />
    <p>父组件name的值： {{ name }}</p>
  </div>
</template>

<script>
import UserName2 from '@/components/UserName2.vue'

export default {
  name: 'Demo31',
  components: {
    UserName2
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
