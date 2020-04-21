<template>
  <div>
    <p>{{a}}</p>
    <p>{{b.name}}</p>
    <button @click="triggerUpdateFailed">触发更新失败</button>
    <button @click="triggerUpdateSucceed">触发更新成功</button>
  </div>
</template>

<script>
import PopperJS from "element-ui/src/utils/popper";

export default {
  name: "Demo45",
  data() {
    return {
      a: 1,
      b: {
        name: "Jack"
      },
      c: [1, 2, 3]
    };
  },
  methods: {
    triggerUpdateFailed() {
      this.b.age = 12;
    },

    triggerUpdateSucceed() {
      // this.$set(this.b, "age", 12);
      this.b = Object.assign({}, this.b, { age: 12, sex: "male" });
    }
  },
  updated() {
    console.log("触发更新");
  }
};
</script>