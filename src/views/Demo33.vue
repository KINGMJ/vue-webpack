<template>
	<div>
		<UserName4 :name="name"/>
	</div>
</template>

<script>
    import UserName4 from '@/components/UserName4.vue';

    export default {
        name: "demo33",
        data: ()=> {
            return {
                name: 'Jack'
            }
        },
        methods: {},
        components: {
            UserName4
        }
    }
</script>

<style scoped>

</style>