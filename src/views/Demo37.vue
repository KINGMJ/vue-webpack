<template>
	<div>
		<UserPanel/>
		<TagPanel/>
	</div>
</template>

<script>
    import UserPanel from '@/components/reusable-component/UserPanel.vue';
    import TagPanel from '@/components/reusable-component/TagPanel.vue'

    export default {
        name: "demo37",
        components: {
            UserPanel, TagPanel
        }
    }
</script>

