import img00 from '../../images/svg-2.svg'
import img01 from '../../images/svg-4.svg'
import img02 from '../../images/agree.svg'
import img03 from '../../images/screen 2.PNG'


export const homeObj1 = {
    id: 'hebergement',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Le printemps',
    ligneEnTete: "Profitez d'un Séjour Agreable au seins de l'Hotel le Printemps",
    description: "Obtenez un accés exclusif pour votre sejour dans un environnement hostille et idéal pour vos activités",
    buttonLabel: 'Entrer',
    imgStart: true,
    img : img00,
    alt: 'hotel',
    dark: true,
    primary: true,
    darkText: false,
    To: "/PageHebergement"
}

export const homeObj2 = {
    id: 'Restauration',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Restauration',
    ligneEnTete: "Exigez plus, payez moins Scandaleusement accessible.",
    description: "Obtenez un accés exclusif pour votre sejour dans un environnement hostille et idéal pour vos activités",
    buttonLabel: 'Voir plus',
    imgStart: false,
    img : img01,
    alt: 'restaurant',
    dark: false,
    primary: false,
    darkText: true,
    To: "/PageRestauration"
}

export const homeObj3 = {
    id: 'connexion',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Se Connecter',
    ligneEnTete: "Nos hôteliers aussi ont des qualités incroyables ",
    description: "Connecter vous pour etre informer et profiter des prix promotionnels exclusifs",
    buttonLabel: 'Commencer maintenant',
    imgStart: true,
    img : img02,
    alt: 'promotion',
    dark: false,
    primary: false,
    darkText: true,
    To: "/PageConnexion"
}

export const homeObj4 = {
    id: 'contact',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Contact',
    ligneEnTete: "Nous joindre ",
    description: "infoPrintempsHotel@gmail.com",
    info0: "237 699 052 458",
    info1: "OU NOUS TROUVER", 
    info2: "rue Amazia Yaoundé ",
    info3: "Cameroun",
    buttonLabel: 'Conctater nous',
    imgStart: false,
    img : img03,
    alt: 'localisation',
    dark: true,
    primary: true,
    darkText: false,
    To: "PageContact"
}
