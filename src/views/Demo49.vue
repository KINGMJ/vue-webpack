<template>
  <div>
    <base-component
      :id="1"
      :content="content"
      @click="onClick"
      title="这是一个title"
    >
      <h2 slot="slot1">Base Component slot</h2>
      <p>default slot</p>
    </base-component>
  </div>
</template>

<script>
import BaseComponent from "../components/hoc2/BaseComponent.vue";
import withSubscription from "../components/hoc2/withSubscription";

const BaseComponentWithSubscription = withSubscription(BaseComponent);

export default {
  name: "app",
  data() {
    return {
      content: "content from base",
    };
  },
  components: {
    "base-component": BaseComponentWithSubscription,
  },
  methods: {
    onClick(msg) {
      alert(msg);
    },
  },
};
</script>
