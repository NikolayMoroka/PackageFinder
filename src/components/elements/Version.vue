<template>
    <div class="pa-1 card__version">
        <v-icon v-if="icon" small color="#000">
            mdi-tag
        </v-icon>
        {{ version }}
    </div>
</template>

<script>
export default {
    name: 'Version',
    props: ['version', 'icon'], 

    computed: {
        
    },

    methods: {
       
    }
}
</script>

<style lang="scss" scoped>
    .card__version{
        font-size: 14px;
        border: 1px solid rgb(188, 188, 188);
        display: inline;
    }
</style>