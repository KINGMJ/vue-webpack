<template>
  <div>
    <ol>
      <TodoItem v-for="item in groceryList" :todo="item" :key="item.id" />
    </ol>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'

export default {
  name: 'Demo6',
  components: {
    TodoItem
  },
  data: () => {
    return {
      groceryList: [
        { id: 0, text: '蔬菜' },
        { id: 1, text: '奶酪' },
        { id: 2, text: '随便其它什么人吃的东西' }
      ]
    }
  }
}
</script>
