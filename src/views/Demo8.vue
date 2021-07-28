<template>
  <div>
    <input v-model="question" title="" />
    <p>{{ answer }}</p>
  </div>
</template>

<script>
export default {
  name: 'Demo8',
  data: () => {
    return {
      question: '',
      answer: '问我一个问题吧！'
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function(newQuestion, oldQuestion) {
      console.log(newQuestion)
      console.log(oldQuestion)
      this.answer = newQuestion === '' ? '问我一个问题吧！' : '这个问题太复杂了！'
    }
  }
}
</script>
