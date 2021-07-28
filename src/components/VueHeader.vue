<!--公用的header-->
<template>
  <div id="header">
    <router-link to="/">主页</router-link>
    <div class="example-title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'VueHeader',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
#header {
  height: 5%;
  background: #333;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  display: flex;
  align-items: center;
  a {
    color: #fff;
    text-decoration: none;
    padding: 0 20px;
    position: relative;
    cursor: pointer;
    &:after {
      display: inline-block;
      content: '';
      position: absolute;
      right: 0;
      top: 4px;
      width: 1px;
      height: 16px;
      background-color: #ddd;
    }
  }
  .example-title {
    padding: 0 20px;
  }
}
</style>
