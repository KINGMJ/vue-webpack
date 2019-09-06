<!--
如果第二屏里面有链接，按tab键会默认切换到第二屏

解决方案：给链接加上 tabindex="-1"

-->

<template>
	<el-carousel :autoplay="false" trigger="click">
		<el-carousel-item>
			<h3 class="small">这是第一个item</h3>
		</el-carousel-item>

		<el-carousel-item>
			<h3 class="small">这是第二item</h3>
			<el-link href="https://element.eleme.io" target="_blank" tabindex="-1">默认链接</el-link>
		</el-carousel-item>
	</el-carousel>
</template>
<script>


    export default {
        name: 'demo43',
        data() {
            return {}
        },
        methods: {},
        components: {}
    };
</script>
<style>
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>
