<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      {{ title }}
      <button type="button" class="close">×</button>
    </div>
    <div v-if="showSubHeading" class="panel-sub-heading">
      <slot name="sub-heading"></slot>
    </div>

    <div class="panel-body smart-scrollbar">
      <slot></slot>
    </div>

    <div v-if="showFooter" class="panel-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    title: String,
    showSubHeading: {
      type: Boolean,
      default: false
    },
    showFooter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedItems: []
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.panel {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  padding: 0;
  width: 300px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  font-size: 14px;

  .panel-sub-heading {
    padding: 5px;
  }

  .panel-body {
    max-height: 36vh;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0;

    ul {
      padding-left: 0;
      list-style: none;
      margin-top: 0;
      margin-bottom: 10px;

      li {
        cursor: pointer;
        height: 48px;
        padding: 0 15px;
        line-height: 48px;
        position: relative;

        &:hover {
          border-radius: 3px;
          background-color: #f5f5f5;
        }
      }
    }
  }

  .check-icon {
    position: absolute;
    right: 20px;
    top: 15px;
  }
}
</style>
