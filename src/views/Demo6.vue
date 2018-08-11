<template>
    <div class="container">
        <div class="example-title">
            Demo6：组件化构建
        </div>
        <div class="example-content">
            <ol>
                <TodoItem v-for="item in groceryList"
                          v-bind:todo="item"
                          v-bind:key="item.id"
                />
            </ol>
        </div>
    </div>

</template>

<script>
    import TodoItem from '@/components/todo-item/TodoItem.vue';

    export default {
        name: 'demo6',
        data: () => {
            return {
                groceryList: [
                    {id: 0, text: '蔬菜'},
                    {id: 1, text: '奶酪'},
                    {id: 2, text: '随便其它什么人吃的东西'}
                ]
            }
        },
        components: {
            TodoItem
        }
    }
</script>

