<script>
    import UserPanel from '@/components/reusable-component/UserPanel.vue';

    export default {
        name: "user-panel1",
        extends: UserPanel,
        methods: {
            showSelectMsg() {
                console.log('子类1勾选了成员')
            },
            postData() {
                console.log("提交到子类1的后台");
            }
        },

    }
</script>