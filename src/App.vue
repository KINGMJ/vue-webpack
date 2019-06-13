<!--程序入口组件-->
<template>
	<div id="app">
		<vue-header v-bind:title="title" v-if="show"/>
		<div class="container">
			<router-view/>
		</div>
	</div>
</template>

<script>
    // @ is an alias to /src
    import VueHeader from '@/components/VueHeader.vue';

    export default {
        name: 'app',
        data: ()=>{
            return {
                title: '',
                show: false
            }
        },
        components: {
            VueHeader
        },
        watch: {
            // 如果路由有变化，会执行该方法
            '$route': function (router) {
                //设置title值为router里指定的meta值
                this.title = router.meta.title == null ? '' : router.meta.title;
                //如果不是主页面，显示公共的header
                this.show = router.name !== 'home';
            }
        }
    }
</script>

<style>
	html, body, #app {
		margin: 0;
		padding: 0;
		height: 100%;
		font-family: 'Helvetica Neue', Arial, sans-serif;
		color: #2c3e50;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	}

	.container {
		text-align: left;
		width: 100% !important;
		height: 95%;
		margin: 20px auto;
	}

	.container > div {
		padding: 20px;
	}
</style>
