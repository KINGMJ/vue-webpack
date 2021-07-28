<template>
  <div>
    <p>my name is {{ name }}</p>
    <input v-model="name" type="text" title="" />
  </div>
</template>

<script>
export default {
  name: 'UserName1',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
