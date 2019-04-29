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
            //第一种方式：
            // 'child': function (resolve) {
            //     require(['@/components/Child.vue'], resolve);
            // }

            //第二种方式：工厂函数中返回一个 Promise
            'child': ()=>import('@/components/Child.vue')
        }
    }
</script>

