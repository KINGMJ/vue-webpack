<template>
    <div class="container">
        <div class="example-title">
            Demo4：事件绑定
        </div>
        <div class="example-content">
            <p>{{ message }}</p>
            <button v-on:click="reverseMessage">逆转消息</button>
        </div>
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

