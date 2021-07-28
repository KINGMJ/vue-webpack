<template>
  <div>
    <UserPanel1 />
    <UserPanel2 />
    <UserPanel3 />
  </div>
</template>

<script>
import UserPanel1 from '@/components/reusable-component/UserPanel1.vue'
import UserPanel2 from '@/components/reusable-component/UserPanel2.vue'
import UserPanel3 from '@/components/reusable-component/UserPanel3.vue'

export default {
  name: 'Demo38',
  components: {
    UserPanel1,
    UserPanel2,
    UserPanel3
  }
}
</script>
