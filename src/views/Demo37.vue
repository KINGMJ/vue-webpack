<template>
  <div>
    <UserPanel />
    <br />
    <TagPanel />
  </div>
</template>

<script>
import UserPanel from '@/components/reusable-component/UserPanel.vue'
import TagPanel from '@/components/reusable-component/TagPanel.vue'

export default {
  name: 'Demo37',
  components: {
    UserPanel,
    TagPanel
  }
}
</script>
