<template>
	<div>
		<!--后备内容-->
		<submit-button/>
		<br><br>
		<submit-button>确定</submit-button>

		<current-user v-slot:default="{user}">
			{{ user.lastName }}
		</current-user>

	</div>
</template>

<script>
    import SubmitButton from '@/components/slot-demo/SubmitButton.vue';
    import CurrentUser from '@/components/slot-demo/CurrentUser.vue';

    export default {
        name: "demo41",
        data() {
            return {
                user: {
                    firstName: 'Jack',
                    lastName: 'Ma'
                }
            }
        },
        components: {
            CurrentUser,
            SubmitButton
        },
    }
</script>

