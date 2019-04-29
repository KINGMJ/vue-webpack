<template>
	<div>
		<button @click="test1($event.currentTarget)">获取currentTarget</button>
		<button @click="test2($event)">获取事件绑定this对象</button>
		<button @click="test3">获取事件绑定this对象</button>
	</div>
</template>

<script>
    export default {
        name: "demo23",
        methods: {
            test1(target) {
                console.log(target);
            },
            test2(event) {
                console.log(event);
            },
            test3(event) {
                console.log(event);
            }
        }
    }
</script>

<style scoped>

</style>