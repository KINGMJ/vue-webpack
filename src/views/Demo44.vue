<template>
  <div>
    <el-popover id="testPopover" v-model="visible" placement="top" width="300" trigger="manual" content="这是一个Popover，手动触发，可以点空白处关闭吗"> </el-popover>

    <el-button type="primary" @click="showPopover">打开Popover</el-button>

    <br />

    <el-popover placement="bottom" title="标题" width="200" trigger="click" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <el-button slot="reference">click 激活</el-button>
    </el-popover>
  </div>
</template>

<script>
import PopperJS from 'element-ui/src/utils/popper'

export default {
  name: 'Demo44',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    showPopover(e) {
      this.visible = true
      //使用popper插件
      new PopperJS(e.currentTarget, document.getElementById('testPopover'), {
        placement: 'bottom'
      })
    }
  }
}
</script>
