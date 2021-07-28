<template>
  <div>
    <UserName1 :name="name" />
  </div>
</template>

<script>
import UserName1 from '@/components/UserName1.vue'

export default {
  name: 'Demo30',
  components: {
    UserName1
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
