<template>
    <div class="search_board">
        <v-text-field
            label="Package name"
            
            dark
            prepend-icon="mdi-magnify"
            @input="getInfo" 
            v-model="value"
        ></v-text-field>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data:() => ({
        value: '',
    }),

    methods: {
        ...mapActions(['getSearchResult']),
        
        getInfo() {
            const data = {
                value: this.value
            }

            this.getSearchResult(data)
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>