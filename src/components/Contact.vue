<template>
    <div class="bgcontact">
        <div class="titlecontact">
            <h2>Contactez-nous</h2>
        </div>
        <div class="contact-me">
            <div>   <img src="../assets/email.jpg" alt="">
                    <a href="mailto:polycarpemakombo@gmail.com" class="colorlink">polycarpemakombo@gmail.com</a>
            </div>
            <div>   <img src="../assets/call.jpg" alt="">
                    <a href="tel:+243822012578" class="colorlink">+243822012578</a>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
    .bgcontact {
        background-image: url(../assets/bgcontact.jpg);
        margin-right: 98px;
        margin-left: 98px;
        padding: 4em 0;
        margin-top: 30px;
    }
    .titlecontact {
        font-family: sans-serif;
        font-size: 18px;
        background: tomato;
        color: #ffffff;
        text-align: center;
    }
    .colorlink {
        color: yellow;
        font-family: sans-serif;
        font-size: 20px;
    }
    .contact-me {
        margin-left: 70px;
        display: flex;
    }
</style>
