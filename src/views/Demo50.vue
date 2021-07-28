<template>
  <add-user-popover placement="left-start" name="AddUserPopoverOfTaskModal">
    <button type="button">打开</button>
  </add-user-popover>
</template>

<script>
import AddUserPopover from '../components/demo50/AddUserPopover.vue'

export default {
  name: 'App',
  components: { AddUserPopover },
  data() {
    return {
      input: ''
    }
  }
}
</script>
