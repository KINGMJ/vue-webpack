<template>
    <div class="container">
        <div class="example-title">
            Demo5：双向绑定
        </div>
        <div class="example-content">
            <p>{{ message }}</p>
            <input v-model="message" title="">
        </div>
    </div>

</template>

<script>
    export default {
        name: 'demo5',
        data: () => {
            return {
                message: 'Hello Vue.js!'
            }
        }
    }
</script>

