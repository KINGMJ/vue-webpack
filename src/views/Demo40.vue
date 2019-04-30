<template>
	<div>
		<p>根据不同的业务场景选择不同的子类</p>
		<UserPanelContainer child="UserPanel2"/>
	</div>
</template>

<script>
    import UserPanelContainer from '@/components/reusable-component/user-panel/UserPanelContainer.vue';

    export default {
        name: "demo40",
        components: {
            UserPanelContainer
        },
    }
</script>

