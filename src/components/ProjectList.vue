<script>
import { api, store } from '../store';
import axios from 'axios';

import ProjectCard from './ProjectCard.vue';

export default{
    data(){
        return{
        store,
        };
    },

    components: { ProjectCard },

    created(){
    axios.get(api.baseUrl + 'projects').then((response) => {
      this.projects = response.data.data;
    });
  },
};
</script>

<template>
<div class="row row-cols-4 g-3">
  <project-card v-for="project in store.projects" :project="projects"/>
</div>
</template>


<style lang="scss">
  @import 'src/scss/general.scss';
</style>