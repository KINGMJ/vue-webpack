<template>
	<div>
		<p>my name is {{name}}</p>
		<input type="text" title="" v-model="name">
	</div>
</template>

<script>
    export default {
        name: "user-name1",
        props: {
            name: {
                type: String,
                default: ''
            },
        }
    }
</script>