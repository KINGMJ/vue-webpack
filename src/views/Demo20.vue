<template>
	<div>
		<p>{{count}}</p>
		<button @click="increment">+</button>
		<button @click="decrement({amount:10})">-</button>
	</div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        name: "demo19",
        computed: {
            ...mapState([
                'count'
            ])
        },
        methods: {
            increment: function () {
                this.$store.dispatch({
                    type: 'increment',
                    amount: 10
                })
            },
            ...mapActions([
                'decrement'
            ])
        }
    }
</script>

<style scoped>

</style>