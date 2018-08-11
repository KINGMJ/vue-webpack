<template>
    <div class="container">
        <div class="example-title">
            Demo7：计算属性：computed
        </div>
        <div class="example-content">
            <p>Original message: "{{ message }}"</p>
            <p>Computed reversed message: "{{ reversedMessage }}"</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'demo7',
        data: () => {
            return {
                message: 'Hello'
            }
        },
        computed: {
            // 计算属性的 getter
            reversedMessage: function () {
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
            }
        }
    }
</script>

