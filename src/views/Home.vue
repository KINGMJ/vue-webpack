<!--Demo的主页面-->
<template>
    <div class="container">
        <img src="../assets/logo.png">
        <HelloVue msg="使用 vue-cli 和 vue-router 构建的 demo"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloVue from '@/components/hello-vue/HelloVue.vue';

    export default {
        name: 'home',
        components: {
            HelloVue
        }
    }
</script>

<style scoped>
    .container {
        margin-top: 60px;
    }
</style>
