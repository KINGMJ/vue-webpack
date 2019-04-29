<template>
	<div>
		<p>my name is {{userName}}</p>
		<input type="text" title="" v-model="userName">
	</div>
</template>

<script>
    export default {
        name: "user-name4",
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
        watch: {
            name: {
                handler: function (val, oldVal) {
                    this.userName = val;
                },
                immediate: true,
	            deep:true
            }
        }
    }
</script>