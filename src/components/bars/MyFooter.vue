<template>
    <div class="my__footer d-flex flex-column flex-md-row align-center justify-space-around">
        <div>
            Designed by Mykola Moroka
        </div>

        <div class="git_link">
            <v-icon class="mr-2" color="rgb(188, 188, 188)">
                mdi-github
            </v-icon>
            <a href="https://github.com/NikolayMoroka">https://github.com/NikolayMoroka</a>
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .my__footer {
        background: #0b0d31;
        color: rgb(188, 188, 188);
        font-size: 12px;
        width: 100vw;
        height: 80px;
    }
    .git_link {
        a{ 
            color: rgb(188, 188, 188);
        }
    }
</style>