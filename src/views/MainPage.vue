<template>
    <div>
        <v-container class="main_page">
            <List/>
        </v-container>
        <MyFooter/>
    </div>
</template>

<script>
import List from '@/components/elements/List.vue'
import MyFooter from '@/components/bars/MyFooter.vue'
export default {
    components: {
        List,
        MyFooter
    },
}
</script>

<style lang="scss" scoped>
    .main_page{
        min-height: calc(100vh - 80px);
        padding-top: 100px;
    }
</style>