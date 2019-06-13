<template>

	<div>


		<input type="text" @keydown.13="testKeyDown">


		<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>


		<el-dialog
				title="提示"
				:visible.sync="dialogVisible"
				width="30%">
			<el-input v-model="input" placeholder="请输入内容" @keydown.enter.native="testKeyDown"></el-input>

			<span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
		</el-dialog>
	</div>


</template>

<script>
    export default {
        name: "demo42",
        data() {
            return {
                input: '',
                dialogVisible: false
            }
        },
        methods: {
            testKeyDown() {
                console.log('会一直输出吗');
            }
        }
    }
</script>

