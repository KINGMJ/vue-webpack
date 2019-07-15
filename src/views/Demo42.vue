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
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确定</el-button>
            </span>
		</el-dialog>

		<el-popover popper-class="el-popover-panel" placement="left-start">
			<el-select placeholder="选择列表"
			           value="1"
			           size="medium" :popper-append-to-body="false">
				<el-option
						key="1"
						label="测试"
						value="1">
				</el-option>
				<el-option
						key="2"
						label="测试2"
						value="2">
				</el-option>
			</el-select>
			<el-button size="medium" plain slot="reference">激活</el-button>
		</el-popover>

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

