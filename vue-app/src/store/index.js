import { createStore } from "vuex";

export default createStore({
  state: {
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  },
  mutations: {
    toggleFavorite(state, character) {
      const index = state.favorites.findIndex(fav => fav.id === character.id);
      if (index === -1) {
        state.favorites.push(character);
      } else {
        state.favorites.splice(index, 1);
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }
  },  
  actions: {},
  getters: {
    getFavorites(state) {
      return state.favorites;
    }
  },
});
