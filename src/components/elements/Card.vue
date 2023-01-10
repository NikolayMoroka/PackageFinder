<template>
    <div>
        <div class="card d-flex align-center justify-space-between my-5">
            <div>
                <div class="d-flex align-center justify-start">
                    <div class="mb-2">
                        <h3 @click="getMoreInfo(packageInfo)" class="card__name">
                            {{ packageInfo.name }}
                        </h3>
                    </div>
                </div>

                <Version :version="packageInfo.version" :icon="true"/>
                 
                <div>
                    <p class="mt-3 card__description">
                        {{ packageInfo.description }}
                    </p>
                </div>
            </div>

            <battons-block :links="packageInfo.links"/>
        </div>

        <info-dialog 
            :dialog="dialog" 
            :info="onePackage"
            @changeStatus="changeDialogStatus"
        />
    </div>
   
</template>

<script>
import InfoDialog from '@/components/elements/InfoDialog.vue'
import Version from '@/components/elements/Version.vue'
import BattonsBlock from '@/components/elements/BattonsBlock.vue'

export default {
    name: 'Card',
    components: {
        InfoDialog,
        Version,
        BattonsBlock
    },
    props: ['packageInfo'],
    data:() => ({
        dialog: false,
        onePackage: {},
    }),

    methods: {
        changeDialogStatus() {
            this.dialog = !this.dialog;
        },

        getMoreInfo(info) {
            this.changeDialogStatus()
            this.onePackage = info
        },
    }
    
}
</script>

<style lang="scss" scoped>
.card{
    width: 97vw;
    border-bottom: 1px solid rgb(188, 188, 188);
    .card__name{
        position: relative;
        font-size: 18px;
        color: #000000c7;
        text-decoration: none;
        &::before {
            content: '';
            position: absolute;
            left: 0; bottom: 0;
            width: 0%;
            height: 2px;
            background-color: #000000c7;
        }
        &:hover:before {
            width: 100%;
        }
        &::before {
            transition: width 0.35s;
        }
        &:hover {
            cursor: pointer;
        }
    }
    .card__description{
        font-size: 12px;
    }
    
}
</style>