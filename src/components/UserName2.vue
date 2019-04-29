<template>
	<div>
		<p>my name is {{userName}}</p>
		<input type="text" title="" v-model="userName">
	</div>
</template>

<script>
    export default {
        name: "user-name2",
        props: {
            name: {
                type: String,
                default: ''
            },
        },
        data: ()=> {
            return {
                userName: ''
            }
        },
        created: function () {
            this.userName = this.name;
        }
    }
</script>