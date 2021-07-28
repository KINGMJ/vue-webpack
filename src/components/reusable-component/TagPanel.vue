<template>
  <div>
    <button @click="show = true">添加标签</button>
    <Panel v-if="show" :list="tag" title="标签" @selectItem="selectTag" @closePanel="show = false" />
  </div>
</template>

<script>
import Panel from '@/components/reusable-component/Panel.vue'

export default {
  name: 'TagPanel',
  components: {
    Panel
  },
  data() {
    return {
      show: false,
      tag: [
        { id: 1, name: 'bug' },
        { id: 2, name: '需求' },
        { id: 3, name: '紧急' }
      ]
    }
  },
  methods: {
    selectTag(isSelected) {
      if (isSelected) {
        console.log('勾选了标签')
      } else {
        console.log('取消勾选了标签')
      }
    }
  }
}
</script>
