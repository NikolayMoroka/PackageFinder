<template>
    <v-container class="list d-flex align-center justify-center">
        <div v-if="SEARCH_LIST.length > 0" class="d-flex flex-column align-center justify-center">
            <div v-for="item in pageArr" :key="item.index" class="elements">
                <Card :packageInfo="item.package" />
            </div>
            <div class="text-center">
                    <v-pagination
                    v-model="page"
                    :length="listLenght"
                    :total-visible="7"
                    color="#0b0d31"
                    ></v-pagination>
            </div>
        </div>

        <div v-else class="message ">
            <div>
                Enter package name
            </div>
        </div>
        
    </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import Card from '@/components/elements/Card.vue'
export default {
    components: {
        Card
    },

    data:() => ({
        page: 1,
    }),

    computed: {
        ...mapGetters(['SEARCH_LIST']),

        listLenght() {
            return Math.ceil(this.SEARCH_LIST.length / 10)
        },

        pageArr() {
            let array = this.SEARCH_LIST; 
            let size = 10;
            let subarray = []; 
            for (let i = 0; i < this.listLenght; i++){
                subarray[i] = array.slice((i*size), (i*size) + size);
            }
            this.scrollToTop()
            return subarray[this.page - 1]
        }
    },

    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
    
}
</script>

<style lang="scss" scoped>

.list {
    min-height: calc(100vh - 80px - 100px);
    .elements {
        width: 100%;
    }
    .message {
        font-size: 22px;
        color: rgb(188, 188, 188);
    }
}
    
    
</style>