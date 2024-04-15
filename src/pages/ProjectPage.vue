<script>
import axios from 'axios';
import {api} from '../store';

import ProjectCard from '../components/ProjectCard.vue';

export default{
  data(){
    return{
      title: "Il mio progetto",
      project: null,
    };
  },
  
  components: { ProjectCard },
  
  created(){
    const projectTitle = this.$route.params.title;
    axios.get(api.baseUrl + `projects/${projectTitle}`).then((response) =>{
        this.project = response.data;
    });
  },

};
</script>

<template>
  <!-- <h1>project: {{ title }}</h1> -->
  <div class="row">
    <project-card :project="project" :isDetail="true"/>
  </div>

</template>

<style lang="scss">
  @import 'src/scss/general.scss';
</style>