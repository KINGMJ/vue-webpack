<template>
  <div>
    <button @click="$emit('click', 'aloha')">事件触发</button>
    <br /><br />
    <slot name="slot1" />
    <p>=====================</p>
    <slot></slot>
    <p>{{ data }}</p>
    <p>从base组件传递进来的：{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: ["data", "id", "content"],
  mounted() {
    console.log(this.id);
  },
};
</script>
