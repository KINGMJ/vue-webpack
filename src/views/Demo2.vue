<template>
    <div class="container">
        <div class="example-title">
            Demo2：条件语句
        </div>
        <div class="example-content">
            <p v-if="seen">现在你看到我了</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'demo2',
        data: () => {
            return {
                seen: true
            }
        }
    }
</script>

