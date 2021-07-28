<template>
  <span>
    <slot :user="user"></slot>
  </span>
</template>

<script>
export default {
  name: 'CurrentUser',
  data() {
    return {
      user: {
        firstName: 'Jack',
        lastName: 'Ma'
      }
    }
  }
}
</script>
