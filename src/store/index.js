// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        favoriteCards: JSON.parse(localStorage.getItem('favoriteCards')) || []
      },
      mutations: {
        ADD_TO_FAVORITES(state, card) {
          if (!state.favoriteCards.find(item => item.id === card.id)) {
            state.favoriteCards.push(card); 
            localStorage.setItem('favoriteCards', JSON.stringify(state.favoriteCards));
            // Добавляем карточку, если ее еще нет в избранном
          } 
        },
        REMOVE_FROM_FAVORITES(state, cardId) {
          state.favoriteCards = state.favoriteCards.filter(card => card.id !== cardId);
          localStorage.setItem('favoriteCards', JSON.stringify(state.favoriteCards));
        },
        removeFavorite(state, cardId) {
            state.favoriteCards = state.favoriteCards.filter(card => card.id !== cardId);
            localStorage.setItem('favoriteCards', JSON.stringify(state.favoriteCards));
          },
      },
      actions: {
        toggleFavorite({ commit, state }, card) {
          const isFavorite = state.favoriteCards.some(item => item.id === card.id);
          if (isFavorite) {
            commit('REMOVE_FROM_FAVORITES', card.id); // Удалить из избранного
          } else {
            commit('ADD_TO_FAVORITES', card); // Добавить в избранное
          }
        },
      },
      getters: {
        isFavorite: (state) => (cardId) => {
          return state.favoriteCards.some(card => card.id === cardId);
        },
        favoriteCards: (state) => state.favoriteCards,
      },
});

export default store;
