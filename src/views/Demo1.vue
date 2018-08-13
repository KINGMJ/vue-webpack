<template>
    <div class="container">
       <span v-bind:title="message">
             {{message2}}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'demo1',
        data: () => {
            return {
                message: '页面加载于' + new Date().toLocaleString(),
                message2: '鼠标悬停几秒钟查看此处动态绑定的提示信息！'
            }
        }
    }
</script>

