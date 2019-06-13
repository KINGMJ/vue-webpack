<template>
	<span>
		<slot v-bind:user="user">
			{{user.firstName}}
		</slot>
	</span>
</template>

<script>
    export default {
        name: "current-user"
    }
</script>