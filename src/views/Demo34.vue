<template>
    <div>
        <Panel title="成员" :list="user" @selectItem="selectUser"/>
        <Panel title="标签" :list="tag" @selectItem="selectTag"/>
    </div>
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
                ],
                tag: [
                    {id: 1, name: 'bug'},
                    {id: 2, name: '需求'},
                    {id: 3, name: '紧急'}
                ]
            }
        },
        methods: {
            selectUser(isSelected) {
                if (isSelected) {
                    console.log('勾选了成员');
                } else {
                    console.log('取消勾选了成员');
                }
            },
            selectTag(isSelected) {
                if (isSelected) {
                    console.log('勾选了标签');
                } else {
                    console.log('取消勾选了标签');
                }
            }
        },
        components: {
            Panel
        }
    }
</script>

<style scoped>

</style>