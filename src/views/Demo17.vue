<template>
	<div>
		<p :style="{color:color,fontSize:fontSize}">{{count}}</p>
	</div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "demo17",
        computed: {
            ...mapState([
                'count',
                'color',
                'fontSize'
            ])
        },
        methods: {}
    }
</script>

<style scoped>

</style>