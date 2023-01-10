<template>
    <div>
        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <div class="my__dialog">
                <div class="top_bar">
                    <v-container class="d-flex align-center justify-start">
                        <v-btn 
                            icon 
                            @click="closeDialog"
                        >
                            <v-icon color="#fff">
                                mdi-arrow-left
                            </v-icon>
                        </v-btn>
                    </v-container>
                </div>

                <div>
                    <v-container class="">
                        <div class="name">{{ info.name }}</div>
                        
                        <div class="mb-2" v-html="ICON_NAME"></div>

                        <Version :version="info.version" :icon="true"/>
                           
                        <div class="keywords d-flex flex-wrap">
                            <div v-for="word in info.keywords" :key="word.index" class="mr-4 mt-4">
                                <Version :version="word"/>
                            </div>
                        </div>

                        <div class="description mt-4">{{ info.description }}</div>

                        <div v-for="(item, index) in info.links" :key="index">
                            
                            <div class="mt-4 d-flex" v-if="index === 'npm' || index === 'repository'"> 
                                <div class="link_name mr-2 d-flex align-center">{{ index }}:</div>
                                <div class="link_block d-flex align-center pa-1" @click="openLink(item)">
                                    <div class="mr-2 link_background">
                                        <v-icon>
                                            mdi-link-variant
                                        </v-icon>
                                    </div>

                                    <div class="link">
                                        {{ item }}
                                    </div>
                                </div>
                               

                            </div>
                           
                        </div>
                    </v-container>
                </div>
                
            </div>
        </v-dialog>
    </div>
</template>

<script>
import Version from '@/components/elements/Version.vue'
import BattonsBlock from '@/components/elements/BattonsBlock.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
    components: {
        Version,
        BattonsBlock
    },
    props: ['dialog', 'info'],
    computed: {
        ...mapGetters(['ICON_NAME'])
    },
    watch: {
       dialog() {
            if(this.dialog) {
                const data = {
                    value: this.info.name
                }
                this.getIcon(data)
            }
        }
    },
    methods: {
        ...mapActions(['getIcon']),
        
        closeDialog() {
            this.$emit('changeStatus')
        },

        openLink(link) {
            window.open(link);
        },
    }
}
</script>

<style lang="scss" scoped>
    .my__dialog {
        min-height: 100vh;
        width: 100%;
        background-color: #fff;
        .top_bar {
            position: absolute;
            height: 60px;
            width: 100%;
            background-color: #0b0d31;
        }
        .name {
            font-size: 30px;
            font-weight: 700;
            margin-top: 100px;
        }
        .description {
            font-size: 16px;
        }
        .keywords {
            max-width: 100%;
        }

        .link_name {
            font-weight: 700;
        }
        .link_block {
            font-size: 14px;
            border: 1px solid rgb(188, 188, 188);
            border-radius: 10px;
            cursor: pointer;
            &:hover {
                background: rgb(255, 86, 39);
                color: #fff;
                border: 1px solid rgb(255, 86, 39);
            }
        }

    
    }
</style>