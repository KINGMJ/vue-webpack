<template>
  <div>
    <button @click="$emit('click', 'aloha')">CLICK ME!</button>
    <br />
    <p>{{ data }}</p>
  </div>
</template>

<script>
export default {
  props: ["data", "id"],
};
</script>
