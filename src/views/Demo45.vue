<template>
  <div>
    <p>{{ a }}</p>
    <p>{{ b.name }}</p>
    <p v-for="(item, index) in lists" :key="index">{{ item }}</p>
    <button @click="triggerUpdateFailed">触发更新失败</button>
    <button @click="triggerUpdateSucceed">触发更新成功</button>
  </div>
</template>

<script>
export default {
  name: 'Demo45',
  data() {
    return {
      a: 1,
      b: {
        name: 'Jack'
      },
      lists: ['a', 'b', 'c']
    }
  },

  watch: {
    b(newVal) {
      console.log(newVal)
      console.log(this.lists)
    }
  },

  mounted() {},

  updated() {
    console.log('触发更新')
  },
  methods: {
    triggerUpdateFailed() {
      //this.b.age = 12       //vue无法检测到属性的添加和删除
      //this.lists[0] = "d";  //利用索引直接修改一个数据项
      //this.lists[3] = "e";  //改变数组的长度
    },

    triggerUpdateSucceed() {
      //this.b = { name: "Rose" }; //对象重新赋值
      this.$set(this.b, 'name', 'Rose') //通过this.$set方法
      //this.b = Object.assign({}, this.b, { age: 12, sex: "male" });   //通过Object.assign函数
      //this.$set(this.lists, 1, "e");
      //this.$set(this.lists, 3, "d");
    }
  }
}
</script>
