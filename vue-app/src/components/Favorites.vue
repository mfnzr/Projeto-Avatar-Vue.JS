<template>
    <div>
        <h1>Favorites</h1>
        <div v-if="favorites.length">
            <div v-for="favorite in favorites" :key="favorite.id">
                <img :src="favorite.photoUrl" :alt="favorite.name">
                <h2>{{ favorite.name }}</h2>
                <p>Allies: {{ favorite.allies.join(', ') }}</p>
                <p>Enemies: {{ favorite.enemies.join(', ') }}</p>
            </div>
        </div>
        <div v-else>
            <p>No favorites added yet.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Favorites',
    computed: {
        favorites() {
            return this.$store.state.favorites;
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
</style>