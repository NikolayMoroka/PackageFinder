<template>
  <v-app>
    <top-bar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>


<script>
import TopBar from '@/components/bars/TopBar'
import MyFooter from '@/components/bars/MyFooter'

export default {
  name: 'App',
  components: {
    TopBar,
    MyFooter
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  body {
    background: #0b0d31;
  }
</style>
