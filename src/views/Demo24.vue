<template>
	<div>
		<ul>
			<li v-for="num in renderTestArray(testArray)">{{num}}</li>
		</ul>
	</div>
</template>

<script>
    export default {
        name: "demo24",
        data: ()=> {
            return {
                testArray: [1, 2, 3]
            }
        },
        computed: {
            renderTestArray() {
                return function (test_array) {
                    return test_array.map(item=>item * 2)
                }
            }
        }
    }
</script>

<style scoped>

</style>