<template>
  <div>
    <div class="menu">
      <router-link to="/" class="menu-link"
        ><img src="/images/iconHome.png" alt="">
      </router-link>
      <router-link to="/favorite"  class="menu-link"><img src="/images/iconFavorite.png" alt="" /></router-link>
      <router-link to="/message"  class="menu-link"><img src="/images/iconMessage.png" alt="" /></router-link>
      <router-link to="/user"  class="menu-link"><img src="/images/iconUser.png" alt="" /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuComponent.vue",
  data() {
    return {};
  },
};
</script>

<style scoped>
@import "@/assets/style.css";
</style>
