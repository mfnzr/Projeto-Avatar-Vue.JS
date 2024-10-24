<template>
    <div>
        <h1>Favorites Characters</h1> 
        <div class="card-characters" v-for="character in characters" :key="character.id">
                <img :src="character.photoUrl" :alt="character.photoUrl">
                <div class="card-characters-info">
                <h2>{{ character.name }}</h2>
                <p>Allies: {{ character.allies.join(', ') }}</p>
                <p>Enemies: {{ character.enemies.join(', ') }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Favorites'
}
</script>

<style>

</style>