<template>
  <div>
    <base-component :id="1" :content="content" title="这是一个title" @click="onClick">
      <h2 slot="slot1">Base Component slot</h2>

      <p>default slot</p>
    </base-component>
  </div>
</template>

<script>
import BaseComponent from '../components/hoc2/BaseComponent.vue'
import withSubscription from '../components/hoc2/withSubscription'

const BaseComponentWithSubscription = withSubscription(BaseComponent)

export default {
  name: 'App',
  components: {
    'base-component': BaseComponentWithSubscription
  },
  data() {
    return {
      content: 'content from base'
    }
  },
  methods: {
    onClick(msg) {
      alert(msg)
    }
  }
}
</script>

<!--
高阶组件的用法：


-->
