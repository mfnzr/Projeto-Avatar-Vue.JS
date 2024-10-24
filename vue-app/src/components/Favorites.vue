<template>
    <div>
        <h1>Favorites</h1>
        <div class="characters-container">
            <div v-if="favorites.length">
                <div class="card-characters" v-for="favorite in favorites" :key="favorite.id">
                    <img :src="favorite.photoUrl" :alt="favorite.name">
                    <div class="card-characters-info">
                        <h2>{{ favorite.name }}</h2>
                        <p>Allies: {{ favorite.allies.join(', ') }}</p>
                        <p>Enemies: {{ favorite.enemies.join(', ') }}</p>
                    </div>
                    <button @click="removeFavorite(favorite)">Remove from favorites</button>
                </div>
            </div>

            <div v-else>
                <p>No favorites added yet.</p>
            </div>

        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
    name: 'Favorites',
    computed: {
        favorites() {
            return this.$store.state.favorites;
        }
    },
    methods: {
        ...mapMutations(["toggleFavorite"]),
        removeFavorite(favorite) {
            this.toggleFavorite(favorite);
        }
    }

}
</script>

<style scoped>
h1 {
    text-align: center;
    color: white;
    padding: 15px;
    background-color: #db6415;
    font-family: avatar-airbender;
    font-size: 48px;
    margin: 50px 500px 50px 500px;

}

h2 {
    font-family: avatar-airbender;
    margin-top: 10px;
}

.characters-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 50px 150px 50px 250px;
}

img {
    width: 200px;
    height: 150px;
}

.card-characters {
    background-color: #db6415;
    width: 250px;
    height: 400px;
    border-radius: 10px;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card-characters-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

button {
    background-color: white;
    color: #A65118;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-family: avatar-airbender;
    font-size: 20px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
}

button:hover {
    background-color: #005F94;
    color: white;
}
</style>