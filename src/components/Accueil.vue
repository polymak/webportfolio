<template>
<div class="bgall">
    <div class="site1">
        <div class="bgsection1">
            <div class="welcome">
            <h1>Bienvenue dans notre Application Site Web PORTFOLIO</h1>
            <h2>Entreprise Polymak</h2>
            <h2>Nouvelle Technologie de l'Information et de la Communication</h2>
        </div>
        </div>
        <div class="service">
            <div class="listservice">
                <ul class="supplist">
                    <li>1.Web Technologie</li>
                    <li>2.Application Mobile</li>
                    <li>3.Logiciel Windows</li>
                    <li>4.Designe</li>
                    <li>5.Et Autres services informatiques</li>
                </ul>
            </div>
            <h1>SERVICES</h1>
            <h3>Développe pour vous les applications Mobile, Site Web, Designer, Logiciel Windows et autres.</h3>
        </div>
    </div>
    <div>
        <h1 class="titleprojet">PROJETS</h1>
        <h3 class="description">Nous travaillons dans des différents projets pour la présentation de nos quelques produits sur le marché informatique. </h3>
    </div>
    <div class="bgprojet">
        <div class="listprojet">
            <div>
                <h2 class="titreprojet">PROJET 1: CREATION DU SITE WEB</h2>
                <ul>
                    <li class="projetliste">1.Création du Site web Vitrine</li>
                    <li class="projetliste">2.Création du Site Web E-commerce</li>
                    <li class="projetliste">3.Création du Site Web Communauté</li>
                </ul>
            </div>
            <div>
                <h2 class="titreprojet">PROJET 2: CREATION APPSTORE</h2>
                <ul>
                    <li class="projetliste">1.Créer votre App Android</li>
                    <li class="projetliste">2.Créer votre App IOS</li>
                </ul>
            </div>
            <div>
                <h2 class="titreprojet">PROJET 3: CREATION DESIGN</h2>
                <ul>
                    <li class="projetliste">1.Création de vos Affiches</li>
                    <li class="projetliste">2.Création de vos Invitations</li>
                    <li class="projetliste">3.Création de vos cartes de visite</li>
                    <li class="projetliste">4Création de vos Webdesigns</li>
                </ul>
            </div>
        </div>
    </div>
        <div>
        <h1 class="titleproduit">PRODUITS</h1>
        <h3 class="descriptionproduit">Voici nos différents produits de notre service Technologique dans le domaine informatique.</h3>
    </div>
        <div class="bgprod">
        <div class="listprod">
            <div>
                <h2 class="titreprod">PRODUIT 1: NOS SITES WEB</h2>
                <ul>
                    <li class="projetliste">1.<a href="https://rfmtv.net" class="colorlink">www.rfmtv.net</a></li>
                    <li class="projetliste">2.<a href="https://groupetaccems.org" class="colorlink">www.groupetaccems.net</a></li>
                    <li class="projetliste">3.<a href="https://zwatek.com" class="colorlink">www.zwatek.com</a></li>
                </ul>
            </div>
            <div>
                <h2 class="titreprod">PRODUIT  2: NOS APPS PLAYSTORE</h2>
                <ul>
                    <li class="projetliste">1.<a href="#" class="colorlink">Pré-exetat:apk</a></li>
                    <li class="projetliste">2.<a href="#" class="colorlink">CartaEduc:apk</a></li>
                    <li class="projetliste">3.<a href="#" class="colorlink">Hospitali:apk</a></li>
                    <li class="projetliste">4.<a href="#" class="colorlink">Wikilangue:apk</a></li>
                </ul>
            </div>
            <div>
                <h2 class="titreprod">PRODUIT 3: NOS LOGICIELS</h2>
                <ul>
                    <li class="projetliste">1.<a href="#" class="colorlink">Wikingo:Windows</a></li>
                    <li class="projetliste">2.<a href="#" class="colorlink">CartaEduc:Windows</a></li>
                    <li class="projetliste">3.<a href="#" class="colorlink">Copemarket:Linux</a></li>
                </ul>
            </div>
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
    .site1 {
        margin-left: 98px;
        margin-right: 98px;
        background-image: url(../assets/bgall.png);
    }
    .welcome {
        padding-left: 80px;
        padding-right: 80px;
        color:#ffffff;
        text-align: center;
        font-family: sans-serif;
    }
    .bgsection1 {
        background-image: url(../assets/banner1.jpg);
        padding: 10em 0;
    }
    .listservice {
        float: left;
        color: yellow;
        text-align: left;
        font-family: sans-serif;
        font-size: 18px;
        margin-left: 60px;
    }
    .supplist {
        list-style: none;
    }
    .service {
        margin-top: 30px;
        background-image: url(../assets/service.jpg);
        padding: 10em 0;
        color:#ffffff;
        text-align: center;
        font-family: sans-serif;
    }
    .titleprojet{
        background: #950a4f;
        color:#ffffff;
        text-align: center;
        margin-left: 98px;
        margin-right: 98px;
        font-family: sans-serif;
    }
    .description {
        background: #164b43;
        color:#ffffff;
        text-align: center;
        margin-left: 300px;
        margin-right: 300px;
        font-family: sans-serif;
    }
    .listprojet {
        display: inline-flex;
        margin-left: 30px;
        margin-right: 30px;
    }
    .titreprojet {
        font-family: sans-serif;
        font-size: 18px;
        color: #ffffff;
        text-align: center;
        background: brown;
        margin-right: 50px;
        padding: 1em 0;
    }
    .projetliste {
        font-family: sans-serif;
        font-size: 20px;
        color: #ffffff;
        text-align: left;
        list-style: none;
        margin-bottom: 20px;
    }
    .bgprojet {
    background-image: url(../assets/bgprojet.jpg);
    padding: 10em 0;
    margin-left: 98px;
    margin-right: 98px;
    }
    .titleproduit{
        background: #1c8f31;
        color:#ffffff;
        text-align: center;
        margin-left: 98px;
        margin-right: 98px;
        font-family: sans-serif;
    }
    .descriptionproduit {
        background: #cb4949;
        color:#ffffff;
        text-align: center;
        margin-left: 300px;
        margin-right: 300px;
        font-family: sans-serif;
    }
    .bgprod {
    background-image: url(../assets/bgprod.jpg);
    padding: 10em 0;
    margin-left: 98px;
    margin-right: 98px;
    }
    .listprod {
        display: inline-flex;
        margin-left: 30px;
        margin-right: 30px;
    }
    .titreprod {
        padding: 1em 0;
        font-family: sans-serif;
        font-size: 20px;
        color: #ffffff;
        text-align: center;
        background: #3a9827;
        margin-right: 50px;
    }
    .colorlink {
        color:yellow;
    }
</style>
