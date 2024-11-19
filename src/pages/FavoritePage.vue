<template>
  <div>
    <h1>Избранные карточки</h1>
    <div v-if="favoriteCards.length === 0">
      <p class="text-for-favoritepage">ИЗБРАННЫХ КАРТОЧЕК НЕТ</p>
      
      <router-link to="/" ><button class="add-card-favorite">добавить</button> </router-link>
    </div>
    <div class="blog-filter-card" v-else>
      <div
        class="blog-details-cards"
        v-for="card in favoriteCards"
        :key="card.id"
      >
        <img :src="card.imgsrc" alt="" class="blog-details-card-img" />
        <div class="blog-details-card-description">
          <p class="blog-description-date">{{ card.name }}</p>
          <p class="blog-details-description-text">{{ card.article }}</p>
           <button @click="removeFromFavorites(card.id)" class="remove-card-favorite">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "FavoritePage.vue",
  computed: {
    ...mapGetters(['favoriteCards']),
  },
  methods: {
    removeFromFavorites(cardId) {
      this.$store.commit('removeFavorite', cardId); // Vuex метод удаления
    }
  },
};
</script>



<style scoped>
@import '@/assets/style.css';
</style>