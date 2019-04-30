<template>
	<Panel title="标签" :list="tag" @selectItem="selectTag"/>
</template>

<script>
    import Panel from '@/components/reusable-component/Panel.vue';

    export default {
        name: "tag-panel",
        data() {
            return {
                tag: [
                    {id: 1, name: 'bug'},
                    {id: 2, name: '需求'},
                    {id: 3, name: '紧急'}
                ]
            }
        },
        methods: {
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