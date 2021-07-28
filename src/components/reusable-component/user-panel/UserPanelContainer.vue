<template>
  <component :is="child"></component>
</template>

<script>
import UserPanel1 from './children/UserPanel1.vue'
import UserPanel2 from './children/UserPanel2.vue'
import UserPanel3 from './children/UserPanel3.vue'

export default {
  name: 'UserPanelContainer',
  components: {
    UserPanel1,
    UserPanel2,
    UserPanel3
  },
  props: {
    child: {
      type: String,
      default: 'UserPanel1',
      validator(value) {
        return ['UserPanel1', 'UserPanel2', 'UserPanel3'].includes(value)
      }
    }
  },
}
</script>
