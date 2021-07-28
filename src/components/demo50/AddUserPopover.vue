<template>
  <el-popover trigger="click">
    <input type="text" placeholder="能输入吗" />
    <div>
      <input type="text" placeholder="是是是" />
    </div>
    <slot slot="reference"></slot>
  </el-popover>
</template>

<script>
export default {
  name: 'AddUserPopover',
  props: {
    name: {
      type: String,
      default: ''
    },

    placement: {
      type: String,
      default: ''
    }
  }
}
</script>
