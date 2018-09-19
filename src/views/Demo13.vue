<template>
	<PropDemo :msg="msg"/>
</template>

<script>
    import PropDemo from '@/components/PropDemo.vue';

    export default {
        name: "demo13",
        data: ()=> {
            return {
                msg: '传递一个属性给子组件'
            }
        },
        components: {
            PropDemo
        }
    }
</script>

<style scoped>

</style>