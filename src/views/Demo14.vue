<template>
	<PropDemo2 :msg="msg" @changeData="changeData"/>
</template>

<script>
    import PropDemo2 from '@/components/PropDemo2.vue';

    export default {
        name: "demo14",
        data: ()=> {
            return {
                msg: '传递一个属性给子组件'
            }
        },
        methods: {
            changeData: function (data) {
                this.msg = data;
            }
        },
        components: {
            PropDemo2
        }
    }
</script>

<style scoped>

</style>