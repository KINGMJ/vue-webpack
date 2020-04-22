<template>
  <div>
    <p>{{a}}</p>
    <p>{{b.name}}</p>
    <!-- <p v-for="(item,index) in lists" :key="index">{{item}}</p> -->
    <button @click="triggerUpdateFailed">触发更新失败</button>
    <button @click="triggerUpdateSucceed">触发更新成功</button>
  </div>
</template>

<script>
export default {
  name: "Demo45",
  data() {
    return {
      a: 1,
      b: {
        name: "Jack"
      },
      lists: ["a", "b", "c"]
    };
  },
  methods: {
    triggerUpdateFailed() {
      this.b.age = 12;
    },
    triggerUpdateSucceed() {
      //this.$set(this.b, "age", 12);
      // this.b = Object.assign({}, this.b, { age: 12, sex: "male" });
      this.$set(this.lists, 3, "d");
    }
  },

  mounted() {},

  updated() {
    console.log("触发更新");
  }
};
</script>