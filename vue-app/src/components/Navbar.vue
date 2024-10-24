<template>
    <div class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/character">Characters</router-link>
        <router-link to="/favorites">Favorites</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style scoped>
@font-face {
    font-family: avatar-airbender;
    src: url(../assets/font/Avatar_Airbender.ttf);
}
@media (min-width: 1024px) {
    .navbar {
        display: flex;
        justify-content: end;
        align-items: center;
        padding: 1em;
        background-color: #db6415;
    }
    
    .navbar a {
        text-decoration: none;
        color: white;
        padding: 5px 20px;
        font-family: avatar-airbender;
        font-size: 24px;
    }

    .navbar a:hover {
        color: #005F94;
    }
}
</style>