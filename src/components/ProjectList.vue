<script>
import { api, store } from '../store';
import axios from 'axios';

export default{
    data(){
        return{
        store,
        };
    },

    created(){
    axios.get(api.baseUrl + 'projects').then((response) => {
      this.projects = response.data.data;
    });
  },
};
</script>

<template>
<div class="card" v-for="project in store.projects">
  <img v-if="project.image" :src="project.image"  class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ project.title }}</h5>
    <p class="card-text">{{ project.description }}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</template>


<style lang="scss">
  @import 'src/scss/general.scss';
</style>