<template>
	<Panel title="成员" :list="user" @selectItem="selectUser"/>
</template>

<script>
    import Panel from '@/components/reusable-component/Panel.vue';

    export default {
        name: "user-panel",
        data() {
            return {
                user: [
                    {id: 1, name: 'Jerry'},
                    {id: 2, name: 'Jack'},
                    {id: 3, name: 'Tom'}
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
        },
        components: {
            Panel
        }

    }
</script>