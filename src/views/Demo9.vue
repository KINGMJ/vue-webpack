<template>
    <div>
        <textarea :value="input" @input="update" title=""></textarea>
        <div v-html="compiledMarkdown"></div>
    </div>

</template>

<script>
    import marked from 'marked';
    import _ from 'lodash';

    export default {
        name: "demo9",
        data: () => {
            return {
                input: '# hello'
            }
        },
        methods: {
            //_.debounce（lodash.js工具库里的一个方法）控制函数执行时间，当300ms后才会执行，保证用户按下键盘只执行最后一次
            update: _.debounce(function (e) {
                this.input = e.target.value
            }, 300)
        },
        computed: {
            compiledMarkdown: function () {
                return marked(this.input, {sanitize: true})
            }
        }
    }
</script>

<style scoped>
    .container > div {
        padding: 0;
        height: 100%;
    }

    textarea, .container div div {
        display: inline-block;
        width: 50%;
        height: 100%;
        vertical-align: top;
        box-sizing: border-box;
        padding: 0 20px;
    }

    textarea {
        border: none;
        border-right: 1px solid #ccc;
        resize: none;
        outline: none;
        background-color: #f6f6f6;
        font-size: 14px;
        font-family: 'Monaco', courier, monospace;
        padding: 20px;
    }

    code {
        color: #f66;
    }
</style>