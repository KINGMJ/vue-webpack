<template>
	<div>
		<UserName1 :name="name"/>
	</div>
</template>

<script>
    import UserName1 from '@/components/UserName1.vue';

    export default {
        name: "demo30",
        data: ()=> {
            return {
                name: 'Jack'
            }
        },
        methods: {},
        components: {
            UserName1
        }
    }
</script>

<style scoped>

</style>