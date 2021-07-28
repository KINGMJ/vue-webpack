const demos = [
  { id: 1, name: '声明式渲染' },
  { id: 2, name: '条件语句' },
  { id: 3, name: '循环语句' },
  { id: 4, name: '事件绑定' },
  { id: 5, name: '双向绑定' },
  { id: 6, name: '组件化构建' },
  { id: 7, name: '计算属性：computed' },
  { id: 8, name: 'watch 监听' },
  { id: 9, name: 'Markdown 编辑器' },
  { id: 10, name: 'GitHub 提交' },
  { id: 11, name: '网格组件' },
  { id: 12, name: '组件生命周期' },
  { id: 13, name: 'Prop' },
  { id: 14, name: '子组件修改父组件的值' },
  { id: 15, name: '全局对象' },
  { id: 16, name: '基础 counter 例子' },
  { id: 17, name: 'State mapState 的用法' },
  { id: 18, name: 'Getter mapGetter 的用法' },
  { id: 19, name: 'Mutation mapMutations 的用法' },
  { id: 20, name: 'Action  的用法' },
  { id: 21, name: '异步组件' },
  { id: 22, name: '组件销毁' },
  { id: 23, name: 'Vue获取事件绑定对象' },
  { id: 24, name: 'Vue的 computed 怎样传参' },
  { id: 25, name: '$refs和$el' },
  { id: 26, name: '样式操作' },
  { id: 27, name: '组件销毁错误示例' },
  { id: 28, name: '自定义指令' },
  { id: 29, name: 'v-on的一些用法' },
  { id: 30, name: 'watch的用法（1）' },
  { id: 31, name: 'watch的用法（2）' },
  { id: 32, name: 'watch的用法（3）' },
  { id: 33, name: 'watch的用法（4）' },
  { id: 34, name: '组件复用（1）' },
  { id: 35, name: '组件复用（2）' },
  { id: 36, name: '组件复用（3）' },
  { id: 37, name: '组件复用（4）' },
  { id: 38, name: '组件复用（5）' },
  { id: 39, name: '组件复用（6）' },
  { id: 40, name: '组件复用（7）' },
  { id: 41, name: '插槽的高级用法（1）' },
  { id: 42, name: 'key' },
  { id: 43, name: 'element-ui <el-carousel-item>组件的bug' },
  { id: 44, name: 'element-ui的Popover怎么点空白处关闭' },
  { id: 45, name: 'vue响应式原理' },
  { id: 46, name: 'vue事件修饰符' },
  { id: 47, name: 'v-for对数组的渲染' },
  { id: 48, name: 'hoc组件' },
  { id: 49, name: 'hoc组件 (2)' }
]

function findNameById(id) {
  const demo = demos.find(o => o.id == id)
  return demo.name
}

function getAllDemos() {
  return demos
}

export { findNameById, getAllDemos }
