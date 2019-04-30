<template>
	<div>
		<p>根据不同的业务场景选择不同的子类</p>
		<UserPanel1 v-if="requirement==1"/>
		<UserPanel2 v-else-if="requirement==2"/>
		<UserPanel3 v-else/>
	</div>
</template>

<script>
    import UserPanel1 from '@/components/reusable-component/UserPanel1.vue';
    import UserPanel2 from '@/components/reusable-component/UserPanel2.vue';
    import UserPanel3 from '@/components/reusable-component/UserPanel3.vue';

    export default {
        name: "demo39",
        data() {
            return {
                requirement: 3
            }
        },
        components: {
            UserPanel1, UserPanel2, UserPanel3
        }
    }
</script>

