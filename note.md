

Les points à approfondir pour la réussite de ce Projet :

css avancé => Création du caroussel avec des transitions
API google maps => use static api
SEO
metatag-sociaux


Les icones et éléments graphique :

Font-Awesome :

Bulle => &bull
Graphe => fa-line-chart
Cammenbert => fa-pie-chart
Boites empilées => fa-cubes
Cercle => fa-circle


bien définir les fonts dans body

Sauvegarde de portfolio :

a.portfolio{
    background: #e5e5e5;
    text-decoration: none;
    color: #6b6e72;
    font-size: 1.1em;
    height: 40px;
    line-height: 40px;
    margin: 0px;
    padding: 0 10px 0 10px;
    position: relative;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    flex-direction: column;

}


a.portfolio:hover{
    background: #5dadd3;
    color: white;
}

a.portfolio:first-child:after{
    font-family: FontAwesome;
    content: "\f0d7";
    position: absolute;
    bottom: -30px;
}
