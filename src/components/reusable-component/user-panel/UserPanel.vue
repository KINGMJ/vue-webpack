<template>
	<div>
		<button @click="show=true">添加成员</button>
		<Panel v-if="show" title="成员" :list="user" @selectItem="selectUser" @closePanel="show=false"/>
	</div>
</template>

<script>
    import Panel from '@/components/reusable-component/Panel.vue';

    export default {
        name: "user-panel",
        data() {
            return {
                show: false,
                user: [
                    {id: 1, name: 'Jerry'},
                    {id: 2, name: 'Jack'},
                    {id: 3, name: 'Tom'}
                ]
            }
        },
        methods: {
            selectUser(isSelected) {
                if (isSelected) {
                    console.log('勾选了成员');
                    this.showSelectMsg();
                    this.postData();
                } else {
                    console.log('取消勾选了成员');
                }
            },


            //类似于接口，该方法子类必须实现
            showSelectMsg() {
                throw new Error('Not Implement: UserPanel.showSelectMsg()');
            },

            postData() {
                console.log("提交到后台");
            }

        },
        components: {
            Panel
        }

    }
</script>