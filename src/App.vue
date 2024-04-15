<script>
import AppHeader from './components/AppHeader.vue';

export default{
  data(){
    return{
      title: "BoolFolio",
    };
  },

  components: { AppHeader, },
};
</script>

<template>
  <app-header :title="title"/>
  <div class="container mt-5">
    <router-view></router-view>
  </div>

</template>

<style lang="scss">
  @import 'src/scss/general.scss';
</style>