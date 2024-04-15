<script>
export default{
   props: { project:Object, isDetail: Boolean },
   computed:{
    abstract(){
        const desc = this.project.description;
        return desc.length > 30 && !this.isDetail ? desc.substr(0,30) + '...' : desc;
    }
   }
}
</script>

<template>
<div class="col">
  <h1 v-if="isDetail" class="card-title mb-5">{{ project.title }}</h1>
      <div class="card h-100">
      <img :src="project.image ? project.image : 'https://placehold.co/600x400'"  class="card-img-top" >
      <div class="card-body">
        <!-- <span :style="'background-color: ' + project.type.color" class="badge mb-2">{{ project.type.label }}</span> -->

        <h2 v-if="!isDetail" class="card-title h5">{{ project.title }}</h2>

        <p class="card-text">{{ abstract }}</p>
        <router-link v-if="!isDetail" :to="{ name:'project.show', params: { title: project.title} }" class="btn btn-primary">Vedi Progetto</router-link>
      </div>
      <div class="card-footer">
        <span :style="'background-color: ' + technology.color" class="badge me-2" v-for="technology in project.technologies" >{{ technology.label }}</span>
      </div>
    </div>
</div>
</template>


<style lang="scss">
  @import 'src/scss/general.scss';
</style>