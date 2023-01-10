<template>
     <div class="d-flex">
            <div class="buttons_block">
                <button v-if="links.repository" class="card__link_btn pa-1 mr-1" @click="openLink(links.repository)">
                    <v-icon class="card__link_btn_icon">mdi-github</v-icon>
                </button>
            </div>

            <div class="buttons_block">
                <button v-if="links.npm" class="card__link_btn pa-1" @click="openLink(links.npm)">
                    <v-icon class="card__link_btn_icon">mdi-npm</v-icon>
                </button>
            </div>
        </div>
</template>

<script>
export default {
    props: ['links'],

    methods: {
        openLink(link) {
            window.open(link);
        },
    }
    
}
</script>

<style lang="scss" scoped>
    .buttons_block {
        .card__link_btn{
            border: 1px solid rgb(188, 188, 188);
            border-radius: none;
            .card__link_btn_icon{
                &:hover{
                color: #000;
                }
            }
            
        }
    }
</style>