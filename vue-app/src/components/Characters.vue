<template>
    <div>
        <h1>Characters</h1>
        <div class="characters-container">
            <div class="card-characters" v-for="character in characters" :key="character.id">
                <img :src="character.photoUrl" :alt="character.photoUrl">
                <div class="card-characters-info">
                    <h2>{{ character.name }}</h2>
                    <p>Allies: {{ character.allies.join(', ') }}</p>
                    <p>Enemies: {{ character.enemies.join(', ') }}</p>
                </div>
                <button @click="toggleFavorite(character)">Add to favorites</button>
            </div>
        </div>
    </div>
</template>

<script>
import Message from './Message.vue';
import { AllCharacters } from '@/services/HttpService';
import { computed } from 'vue';
import { mapMutations } from 'vuex';

export default {

    name: 'Characters',

    data() {
        return {
            characters: [],
            selectCharacter: null,
            name: null,
            allies: null,
            enemies: null,
            msg: null
        }
    },
    created() {
        this.getAllCharacters();
    },

    methods: {
        
        async getAllCharacters() {
            const res = await AllCharacters();
            this.characters = res.data;
        },
        
        
        toggleFavorite(character) {
            this.$store.commit('toggleFavorite', character);
        },
        ...mapMutations(["toggleFavorite"]),


    },
    computed: {
        favorites() {
            return this.$store.state.favorites;
        }
    },

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

.card-characters:hover {
    box-shadow: 5px 5px 5px 5px rgba(3, 4, 5, 0.3);
    transition: .5s;
    width: 255px;
    height: 405px;

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
    transition: .5s;
}
</style>