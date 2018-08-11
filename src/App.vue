<!--程序入口组件-->
<template>
    <div id="app">
        <router-view/>
    </div>
</template>

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

    .example-title {
        height: 48px;
        background: #333;
        padding: 0 20px;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        text-align: left;
        display: flex;
        align-items: center;
    }

    .example-content {
        margin: 20px 0 0;
        padding: 0 20px;
        text-align: left;
    }
</style>
