<template>
  <div>
    <Panel :list="user" title="成员" @selectItem="selectUser" />
    <Panel :list="tag" title="标签" @selectItem="selectTag" />
  </div>
</template>

<script>
import Panel from '@/components/reusable-component/Panel.vue'

export default {
  name: 'Demo34',
  components: {
    Panel
  },
  data() {
    return {
      user: [
        { id: 1, name: 'Jerry' },
        { id: 2, name: 'Jack' },
        { id: 3, name: 'Tom' }
      ],
      tag: [
        { id: 1, name: 'bug' },
        { id: 2, name: '需求' },
        { id: 3, name: '紧急' }
      ]
    }
  },
  methods: {
    selectUser(isSelected) {
      if (isSelected) {
        console.log('勾选了成员')
      } else {
        console.log('取消勾选了成员')
      }
    },
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

<style scoped></style>
