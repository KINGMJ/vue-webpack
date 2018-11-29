<template>
	<div>
		<button @click="showChild">显示儿子</button>
		<div v-if="show">
			<child/>
		</div>
	</div>
</template>

<script>
    export default {
        name: "demo21",
        data: ()=> {
            return {
                show: false
            }
        },
        methods: {
            showChild: function () {
                setTimeout(()=> {
                    this.show = true;
                }, 1000)
            }
        },
        components: {
            'child': function (resolve) {
                require(['@/components/Child.vue'], resolve);
            }
        }
    }
</script>

