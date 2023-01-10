<template>
    <div class="top_bar d-flex align-center">
        <v-container class="d-flex align-center justify-space-between">
            
            <h2>PackageFinder</h2>
            
            <div>
                <search-board/>
            </div>
        </v-container>
    </div>
</template>

<script>
import SearchBoard from '@/components/elements/SearchBoard.vue'
export default {
    components: {
        SearchBoard
    }
    
}
</script>

<style lang="scss" scoped>
    .top_bar{
        position: fixed;
        height: 100px;
        width: 100%;
        background-color: rgb(11, 13, 49);
        z-index: 10;
        h2{
            color: #fff;
        }
    }
</style>