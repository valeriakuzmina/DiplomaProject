<template>
<div>
<!-- <HeaderComponent /> -->
<filter-component />
<!-- <menu-component /> -->
  <!-- <nav class="navigation">
    <div class="logo">
      <img class="logo-photo" src="/images/Logo.png" alt="" />
      <p class="logo-text">Interno</p>
    </div>
    <div class="nav-menu">
      <router-link to="/" class="nav-menu-text">Домой</router-link>
      <router-link to="/project" class="nav-menu-text">Проект</router-link>
      <router-link to="/blog" class="nav-menu-text">Блог</router-link>
    </div>
  </nav> -->
  </div>
</template>

<script>
// import HeaderComponent from '@/components/HeaderComponent.vue';
import FilterComponent from '@/components/FilterComponent.vue';
// import MenuComponent from '@/components/MenuComponent.vue';
export default {
  name: "HomePage.vue",
  components: {FilterComponent}
};
</script>

<style scoped>
@import "@/assets/style.css";
</style>