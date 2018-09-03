<template>
<div class="bgall">
    <div class="homemenu">
        <div id="nav-top">
            <div class="titlelogo">LOGO</div>
            <router-link to="/" class="nav-item">ACCUEIL</router-link>
            <router-link to="/Contact" class="nav-item">CONTACT</router-link>
        </div>
    </div>
</div>
</template>

<script>
</script>

<style scoped>
    .bgall {
        background-image: url(../assets/bgall.png);
    }
    .homemenu {
        margin-left: 98px;
        margin-right: 98px;
    }
    #nav-top {
        background: #903142;
        display: flex;
        padding: 0em 0;
    }
    .nav-item {
        color:#ffffff;
        text-decoration: none;
        margin-right: 30px;
        font-family: sans-serif;
        font-size: 20px;
        padding: 1em 0;
    }
    .titlelogo {
        color:yellow;
        text-decoration: none;
        margin-right: 750px;
        margin-left: 30px;
        border: turquoise;
        border-bottom-style:solid;
        font-size: 20px;
        font-family: sans-serif;
        padding: 1em 0;
    }
</style>
