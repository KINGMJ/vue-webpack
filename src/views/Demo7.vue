<template>
  <div>
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
  </div>
</template>

<script>
export default {
  name: 'Demo7',
  data: () => {
    return {
      message: 'Hello'
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      // `this` 指向 vm 实例
      return this.message
        .split('')
        .reverse()
        .join('')
    }
  }
}
</script>
