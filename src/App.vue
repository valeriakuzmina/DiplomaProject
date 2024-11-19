<template>
  <div id="app">
   <header-component />
     <router-view />
     <menu-component />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import MenuComponent from './components/MenuComponent.vue'




export default {
  name: 'App',
  components: {
    HeaderComponent,
    MenuComponent
  }
}
</script>
    HeaderComponentipt>

<style>
@import '@/assets/style.css';
</style>
