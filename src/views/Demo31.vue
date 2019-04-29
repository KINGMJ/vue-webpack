<template>
	<div>
		<UserName2 :name="name"/>
	</div>
</template>

<script>
    import UserName2 from '@/components/UserName2.vue';

    export default {
        name: "demo31",
        data: ()=> {
            return {
                name: 'Jack'
            }
        },
        methods: {},
        components: {
            UserName2
        }
    }
</script>

<style scoped>

</style>