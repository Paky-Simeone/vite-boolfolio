<script>
// import MyComponent from "./components/MyComponent.vue";
import axios from 'axios';

export default{
  data(){
    return{
      title: "BoolFolio",
      projects: [],
    };
  },

  created(){
    axios.get('projects').then((response) => {
      this.projects = response.data.data;
    });
  },

  // components:{
  //   MyComponent,
  // },
};
</script>

<template>
    <h1>{{ title }}</h1>

    <div v-for="project in projects">
      <ul>
        <li><strong>Id: </strong>{{ project.id }}</li>
        <li><strong>Title: </strong>{{ project.title }}</li>
        <li><strong>Description: </strong>{{ project.description }}</li>
      </ul>
      <hr/>
    </div>
</template>

<style lang="scss">
  @import 'src/scss/general.scss';
</style>