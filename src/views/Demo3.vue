<template>
  <div>
    <ol>
      <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Demo3',
  data: () => {
    return {
      todos: [
        { id: 1, text: '学习 JavaScript' },
        { id: 2, text: '学习 Vue' },
        { id: 3, text: '整个牛项目' }
      ]
    }
  }
}
</script>
