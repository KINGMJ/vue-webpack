<template>
    <div>
        <form id="search">
            Search <input name="query" v-model="searchQuery" title="">
        </form>
        <demo-grid
                :data="gridData"
                :columns="gridColumns"
                :filter-key="searchQuery">
        </demo-grid>
    </div>
</template>

<script>
    import DemoGrid from '@/components/DemoGrid.vue';

    export default {
        name: "demo11",
        data: () => {
            return {
                searchQuery: '',
                gridColumns: ['name', 'power'],
                gridData: [
                    {name: 'Chuck Norris', power: Infinity},
                    {name: 'Bruce Lee', power: 9000},
                    {name: 'Jackie Chan', power: 7000},
                    {name: 'Jet Li', power: 8000}
                ]
            }
        },
        components: {
            DemoGrid
        }
    }
</script>

<style scoped>

</style>