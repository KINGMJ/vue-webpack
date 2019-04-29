<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            {{title}}
            <button type="button" class="close">×</button>
        </div>
        <div class="search">
            <input type="text" class="form-control"
                   placeholder="查找..."
                   v-focus>
        </div>
        <div class="panel-body smart-scrollbar">
            <ul>
                <li :title="item.name" v-for="(item,index) in list" :id="item.id" @click="selectItem(index)">
                    {{item.name}}
                    <span v-show="selectedItems.includes(index)" class="check-icon glyphicon glyphicon-ok"></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                selectedItems: []
            }
        },
        props: {
            title: String,
            list: Array
        },
        methods: {
            selectItem(key) {
                const index = this.selectedItems.indexOf(key);
                if (!~index) {
                    this.selectedItems.push(key);
                    this.$emit('selectItem', true);
                } else {
                    this.selectedItems.splice(index, 1);
                    this.$emit('selectItem', false);
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .panel {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        margin: 20px auto;
        padding: 0;
        width: 300px;
        border: 1px solid #ebeef5;
        border-radius: 4px;
        font-size: 14px;


        .search {
            padding: 5px;
        }

        .panel-body {
            max-height: 36vh;
            overflow-x: hidden;
            overflow-y: auto;
            padding: 0;

            ul {
                padding-left: 0;
                list-style: none;
                margin-top: 0;
                margin-bottom: 10px;

                li {
                    cursor: pointer;
                    height: 48px;
                    padding: 0 15px;
                    line-height: 48px;
                    position: relative;

                    &:hover {
                        border-radius: 3px;
                        background-color: #f5f5f5;
                    }
                }
            }
        }

        .check-icon {
            position: absolute;
            right: 20px;
            top: 15px;
        }
    }


</style>