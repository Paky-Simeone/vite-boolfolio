<script>
import AppHeader from './components/AppHeader.vue';
import ProjectList from './components/ProjectList.vue';

export default{
  data(){
    return{
      title: "BoolFolio",
    };
  },

  components: { AppHeader, ProjectList },
};
</script>

<template>
  <app-header :title="title"/>

  <div class="container mt-5">
    <project-list/>
  </div>

</template>

<style lang="scss">
  @import 'src/scss/general.scss';
</style>