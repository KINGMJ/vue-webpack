<template>
	<div>
		<button @click="destroyComponent">组件外部销毁</button>
		<Child2 v-if="show"/>
	</div>
</template>

<script>
    import Child2 from '@/components/Child2.vue';
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: "demo22",
        computed: {
            ...mapState([
                'show'
            ])
        },
        methods: {
            destroyComponent: function () {
                this.setShow(false);
            },
            ...mapMutations([
                'setShow'
            ])
        },

        components: {
            Child2
        }
    }
</script>

<style scoped lang="scss">
	button {
		margin-bottom: 15px;
	}
</style>

