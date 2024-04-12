<script>
export default{
   props: { project:Object },
   computed:{
    abstract(){
        const desc = this.project.description;
        return desc.length > 30 ? desc.substr(0,30) + '...' : desc;
    }
   }
}
</script>

<template>
<div class="col">
      <div class="card h-100">
      <img :src="project.image ? project.image : 'https://placehold.co/600x400'"  class="card-img-top" alt="...">
      <div class="card-body">
        <!-- <span :style="'background-color: ' + project.type.color" class="badge mb-2">{{ project.type.label }}</span> -->
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ abstract }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
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