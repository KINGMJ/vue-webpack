<template>
  <div>
    <p>{{ content }}</p>
    <button @click="print">方法测试</button>
  </div>
</template>

<script>
import testMixins from '@/mixins/testMixins'
import test2Mixins from '@/mixins/test2Mixins'

export default {
  name: 'Demo35',
  components: {},
  mixins: [testMixins, test2Mixins],
  data() {
    return {
      content: '这是组件本身输出的'
    }
  },
  created() {
    console.log('组件本身的钩子被调用')
  },
  methods: {
    print() {
      console.log('组件本身输出')
    }
  }
}
</script>
