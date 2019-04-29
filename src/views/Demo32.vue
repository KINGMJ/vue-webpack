<template>
	<div>
		<UserName3 :name="name"/>
	</div>
</template>

<script>
    import UserName3 from '@/components/UserName3.vue';

    export default {
        name: "demo32",
        data: ()=> {
            return {
                name: 'Jack'
            }
        },
        methods: {},
        components: {
            UserName3
        }
    }
</script>

<style scoped>

</style>