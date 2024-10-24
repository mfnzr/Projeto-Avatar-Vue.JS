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
        justify-content: space-evenly;
        align-items: center;
        padding: .5rem;
        margin-left: 15rem;
        margin-right: 15rem;
    }
    
    .navbar a {
        text-decoration: none;
        color: white;
        background-color: #db6415   ;
        padding: 15px 30px;
        border: 2px solid white;
        border-radius: 10px;
        font-family: avatar-airbender;
        font-size: 28px;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3)
    }

    .navbar a:hover {
        background-color: #005F94;
        font-size: 30px;
    }
}
</style>