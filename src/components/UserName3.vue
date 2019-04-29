<template>
	<div>
		<p>my name is {{userName}}</p>
		<input type="text" title="" v-model="userName">
	</div>
</template>

<script>
    export default {
        name: "user-name3",
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
        },
        watch: {
            name: function (val, oldVal) {
                this.userName = val;
            }
        }
    }
</script>