<template>
	<Panel title="成员" :list="user"></Panel>
</template>

<script>
    import Panel from '@/components/reusable-component/Panel.vue';

    export default {
        name: "demo34",
        data() {
            return {
                user: [
                    {id: 1, name: 'Jerry'},
                    {id: 2, name: 'Jack'},
                    {id: 3, name: 'Tom'}
                ]
            }
        },
        methods: {},
        components: {
            Panel
        }
    }
</script>

<style scoped>

</style>