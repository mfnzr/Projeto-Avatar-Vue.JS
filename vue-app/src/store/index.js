import { createStore } from "vuex";

export default createStore({
  state: {
    selectedCharacters: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  },
  mutations: {
    toggleFavorite(state, character) {
        state.favorites.push(character);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      },

      deleteFavorite(state, characterId) {
        const index = state.favorites.findIndex(character => character.id === characterId);        if (index !== -1) {
        state.favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    }
  },  
  actions: {
    removeFavorite({ commit }, characterId) {
      commit('deleteFavorite', characterId);
    }
  },
  getters: {
    getFavorites(state) {
      return state.favorites;
    }
  },
});
