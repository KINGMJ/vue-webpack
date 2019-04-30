export default {
    data() {
        return {
            content: "这是testMixins输出的"
        }
    },
    methods: {
        print() {
            console.log('testMixins输出');
        }
    },
    created() {
        console.log('混入对象testMixins的钩子被调用')
    }
}
