<!--程序入口组件-->
<template>
    <div id="app">
        <vue-header v-bind:title="title" v-if="show"/>
        <router-view/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import VueHeader from '@/components/VueHeader.vue';

    export default {
        name: 'app',
        data: () => {
            return {
                title: '',
                show: false
            }
        },
        components: {
            VueHeader
        },
        watch: {
            // 如果路由有变化，会执行该方法
            '$route': function (router) {
                //设置title值为router里指定的meta值
                this.title = router.meta.title == null ? '' : router.meta.title;
                //如果不是主页面，显示公共的header
                this.show = router.name !== 'home';
            }
        }
    }
</script>

<style>
    body {
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .container {
        margin: 20px 0 0;
        padding: 0 20px;
        text-align: left;
    }
</style>
