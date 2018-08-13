<template>
    <div>
        <h1>{{ msg }}</h1>
        <h3>官方资料</h3>
        <ul>
            <li><a href="https://cn.vuejs.org/" target="_blank">vue-js</a></li>
            <li><a href="https://cli.vuejs.org/guide/" target="_blank">vue-cli</a></li>
            <li><a href="https://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>

        <h3>第一组示例</h3>
        <ul>
            <li>
                <router-link to="/demo1">声明式渲染</router-link>
            </li>
            <li>
                <router-link to="/demo2">条件语句</router-link>
            </li>
            <li>
                <router-link to="/demo3">循环语句</router-link>
            </li>
            <li>
                <router-link to="/demo4">事件绑定</router-link>
            </li>
            <li>
                <router-link to="/demo5">双向绑定</router-link>
            </li>
            <li>
                <router-link to="/demo6">组件化构建</router-link>
            </li>
        </ul>

        <h3>第二组示例</h3>
        <ul>
            <li>
                <router-link to="/demo7">计算属性 computed</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 20px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
