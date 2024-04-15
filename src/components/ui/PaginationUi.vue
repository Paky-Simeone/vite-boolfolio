<script>
export default{
    props: { pagination: Array },
    emit: ['change-page'],
};
</script>

<template>

  <!-- <nav aria-label="Page navigation example">
  <ul class="pagination mt-4">
    <li @click="$emit('change-page', link.url)" 
    :class="{
        active: link.active, 
        disabled: !link.url
        }" class="page-item">
        <a class="page-link" href="#" v-html="link.label"></a>
    </li>
  </ul>
</nav> -->

</template>

<style lang="scss">

</style>