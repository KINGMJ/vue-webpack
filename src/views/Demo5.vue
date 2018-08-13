<template>
    <div class="container">
        <p>{{ message }}</p>
        <input v-model="message" title="">
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

