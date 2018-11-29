<template>
	<div>
		<p>{{upperHello}}</p>
		<P>{{helloVue}}</P>
		<p>{{findBook(1)}}</p>
	</div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: "demo18",
        computed: {
            ...mapState([
                'count',
                'color',
                'fontSize'
            ]),
            ...mapGetters([
                'upperHello',
                'helloVue',
                'findBook'
            ])
        },
        methods: {}
    }
</script>

<style scoped>

</style>