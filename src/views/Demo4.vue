<template>
    <div class="container">
        <p>{{ message }}</p>
        <button v-on:click="reverseMessage">逆转消息</button>
    </div>
</template>

<script>
    export default {
        name: 'demo4',
        data: () => {
            return {
                message: 'Hello Vue.js!'
            }
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    }
</script>

