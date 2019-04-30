export default {
    data() {
        return {
            content: "这是test2Mixins输出的"
        }
    },
    print() {
        console.log('testMixins输出');
    },
    created() {
        console.log('混入对象test2Mixins的钩子被调用')
    }
}
