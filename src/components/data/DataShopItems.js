import deo from '../../assets/shop/deodorant.webp'
import cream from '../../assets/shop/bodycream.webp'
import moistureMist from '../../assets/shop/moisturemist.webp'
import hairMist from '../../assets/shop/hairmist.webp'
import night from '../../assets/shop/night.webp'
import over from '../../assets/shop/over.webp'
import shower from '../../assets/shop/shower.webp'
import lotion from '../../assets/shop/lotion.webp'
import soap from '../../assets/shop/BathSoap.webp'

import essenceparfum from '../../assets/shop/EssenceParfum.jpeg'
import essenceeau from '../../assets/shop/EssenceEau.webp'
import essencetoilette from '../../assets/shop/EssenceToilette.jpeg'
import essencepremier from '../../assets/shop/EssencePremierSpray.jpeg'
import essencetwist from '../../assets/shop/EssenceTwistSpray.jpeg'
import essencefullset from '../../assets/shop/EssenceFullset.jpeg'

import fparfum from '../../assets/shop/FleurParfum.webp'
import feau from '../../assets/shop/FleurEau.webp'
import ftoilette from '../../assets/shop/Fleurtoilette.webp'
import fpremier from '../../assets/shop/FleurPremier.webp'
import ftwist from '../../assets/shop/FleurTwistandspray.webp'
import ffullset from '../../assets/shop/FleurFullset.webp'

import aparfum from '../../assets/shop/AromeParfum.webp'
import aeau from '../../assets/shop/AromeEauParfum.webp'
import atoilette from '../../assets/shop/AromeToilete.webp'
import apremier from '../../assets/shop/AromePremier.webp'
import atwist from '../../assets/shop/AromeTwistSpray.webp'
import afullset from '../../assets/shop/AromeFullset.webp'

import pparfum from '../../assets/shop/ParfumerieParfum.webp'
import peau from '../../assets/shop/ParfumerieEau.webp'
import ptoilette from '../../assets/shop/ParfumerieToilette.webp'
import ppremier from '../../assets/shop/ParfumeriePremiere.avif'
import ptwist from '../../assets/shop/ParfumerieTwistSpray.webp'
import pfullset from '../../assets/shop/ParfumerieFullSet.avif'



const DataShopItems = [
    {
        id: 1,
        series: 'Parfumerie Collection',
        type: 'PARFUM',
        price: '195',
        image: pparfum,
    },
    {
        id: 2,
        series: 'Parfumerie Collection',
        type: 'EAU DE PARFUM',
        price: '195',
        image: peau,
    },
    {
        id: 3,
        series: 'Parfumerie Collection',
        type: 'EXTRAIT FULL SET',
        price: '500',
        image: pfullset,
    },
    {
        id: 4,
        series: 'Parfumerie Collection',
        type: 'ESSENCE TWIST AND SPRAY',
        price: '195',
        image: ptwist,
    },
    {
        id: 5,
        series: 'Parfumerie Collection',
        type: 'EAU DE TOILETTE',
        price: '158',
        image: ptoilette,
    },
    {
        id: 6,
        series: 'Parfumerie Collection',
        type: 'EAU PREMIERE SPRAY',
        price: '195',
        image: ppremier,
    },
    {
        id: 7,
        series: 'Parfumerie Collection',
        type: 'THE BATH SOAP',
        price: '49',
        image: soap,
    },
    {
        id: 8,
        series: 'Parfumerie Collection',
        type: 'ON HAND CREAM',
        price: '91',
        image: cream,
    },
    {
        id: 9,
        series: 'Parfumerie Collection',
        type: 'EAU FRESH LOTION',
        price: '81',
        image: lotion,
    },
    {
        id: 10,
        series: 'Parfumerie Collection',
        type: 'EAU IN-SHOWER GEL',
        price: '61',
        image: shower,
    },
    {
        id: 11,
        series: 'Parfumerie Collection',
        type: 'EAU ALL OVER SPRAY',
        price: '93',
        image: over,
    },
    {
        id: 12,
        series: 'Parfumerie Collection',
        type: 'BODY CREAM',
        price: '159',
        image: cream,
    },
    {
        id: 13,
        series: 'Parfumerie Collection',
        type: 'DEODORANT SPRAY',
        price: '70',
        image: deo,
    },
    {
        id: 14,
        series: 'Parfumerie Collection',
        type: 'FRESH MOISTURE MIST',
        price: '69',
        image: moistureMist,
    },
    {
        id: 15,
        series: 'Parfumerie Collection',
        type: 'NIGHT FRAGRANCE',
        price: '159',
        image: night,
    },
    {
        id: 16,
        series: 'Parfumerie Collection',
        type: 'HAIR MIST',
        price: '86',
        image: hairMist,
    },


//BELLE AROME SERIES
    {
        id: 21,
        series: 'Arome Series',
        type: 'EAU DE TOILETTE',
        price: '158',
        image: atoilette,
    },
    {
        id: 17,
        series: 'Arome Series',
        type: 'PARFUM',
        price: '195',
        image: aparfum,
    },
    {
        id: 18,
        series: 'Arome Series',
        type: 'EAU DE PARFUM',
        price: '195',
        image: aeau,
    },
    {
        id: 20,
        series: 'Arome Series',
        type: 'ESSENCE TWIST AND SPRAY',
        price: '195',
        image: atwist,
    },
    {
        id: 19,
        series: 'Arome Series',
        type: 'EXTRAIT FULL SET',
        price: '500',
        image: afullset,
    },

    {
        id: 22,
        series: 'Arome Series',
        type: 'EAU PREMIERE SPRAY',
        price: '195',
        image: apremier,
    },
    {
        id: 23,
        series: 'Arome Series',
        type: 'THE BATH SOAP',
        price: '49',
        image: soap,
    },
    {
        id: 24,
        series: 'Arome Series',
        type: 'ON HAND CREAM',
        price: '91',
        image: cream,
    },
    {
        id: 25,
        series: 'Arome Series',
        type: 'EAU FRESH LOTION',
        price: '81',
        image: lotion,
    },
    {
        id: 26,
        series: 'Arome Series',
        type: 'EAU IN-SHOWER GEL',
        price: '61',
        image: shower,
    },
    {
        id: 27,
        series: 'Arome Series',
        type: 'EAU ALL OVER SPRAY',
        price: '93',
        image: over,
    },
    {
        id: 28,
        series: 'Arome Series',
        type: 'BODY CREAM',
        price: '159',
        image: cream,
    },
    {
        id: 29,
        series: 'Arome Series',
        type: 'DEODORANT SPRAY',
        price: '70',
        image: deo,
    },
    {
        id: 30,
        series: 'Arome Series',
        type: 'FRESH MOISTURE MIST',
        price: '69',
        image: moistureMist,
    },
    {
        id: 31,
        series: 'Arome Series',
        type: 'NIGHT FRAGRANCE',
        price: '159',
        image: night,
    },








// Belle Fleur Fragrances (continued)
    {
        id: 33,
        series: 'Fleur Fragrances',
        type: 'PARFUM',
        price: '195',
        image: fparfum,
    },
    {
        id: 36,
        series: 'Fleur Fragrances',
        type: 'ESSENCE TWIST AND SPRAY',
        price: '195',
        image: ftwist,
    },
    {
        id: 37,
        series: 'Fleur Fragrances',
        type: 'EAU DE TOILETTE',
        price: '158',
        image: ftoilette,
    },
    {
        id: 38,
        series: 'Fleur Fragrances',
        type: 'EAU PREMIERE SPRAY',
        price: '195',
        image: fpremier,
    },
    {
        id: 34,
        series: 'Fleur Fragrances',
        type: 'EAU DE PARFUM',
        price: '195',
        image: feau,
    },
    {
        id: 35,
        series: 'Fleur Fragrances',
        type: 'EXTRAIT FULL SET',
        price: '500',
        image: ffullset,
    },

    {
        id: 39,
        series: 'Fleur Fragrances',
        type: 'THE BATH SOAP',
        price: '49',
        image: soap,
    },
    {
        id: 40,
        series: 'Fleur Fragrances',
        type: 'ON HAND CREAM',
        price: '91',
        image: cream,
    },
    {
        id: 41,
        series: 'Fleur Fragrances',
        type: 'EAU FRESH LOTION',
        price: '81',
        image: lotion,
    },
    {
        id: 42,
        series: 'Fleur Fragrances',
        type: 'EAU IN-SHOWER GEL',
        price: '61',
        image: shower,
    },
    {
        id: 43,
        series: 'Fleur Fragrances',
        type: 'EAU ALL OVER SPRAY',
        price: '93',
        image: over,
    },
    {
        id: 44,
        series: 'Fleur Fragrances',
        type: 'BODY CREAM',
        price: '159',
        image: cream,
    },
    {
        id: 45,
        series: 'Fleur Fragrances',
        type: 'DEODORANT SPRAY',
        price: '70',
        image: deo,
    },
    {
        id: 46,
        series: 'Fleur Fragrances',
        type: 'FRESH MOISTURE MIST',
        price: '69',
        image: moistureMist,
    },
    {
        id: 47,
        series: 'Fleur Fragrances',
        type: 'NIGHT FRAGRANCE',
        price: '159',
        image: night,
    },
    {
        id: 48,
        series: 'Fleur Fragrances',
        type: 'HAIR MIST',
        price: '86',
        image: hairMist,
    },
// Belle Essence Elixirs (continued)
    {
        id: 53,
        series: 'Essence Elixirs',
        type: 'EAU DE TOILETTE',
        price: '158',
        image: essencetoilette,
    },
    {
        id: 50,
        series: 'Essence Elixirs',
        type: 'EAU DE PARFUM',
        price: '195',
        image: essenceeau,
    },
    {
        id: 51,
        series: 'Essence Elixirs',
        type: 'EXTRAIT FULL SET',
        price: '500',
        image: essencefullset,
    },
    {
        id: 49,
        series: 'Essence Elixirs',
        type: 'PARFUM',
        price: '195',
        image: essenceparfum,
    },
    {
        id: 52,
        series: 'Essence Elixirs',
        type: 'ESSENCE TWIST AND SPRAY',
        price: '195',
        image: essencetwist,
    },

    {
        id: 54,
        series: 'Essence Elixirs',
        type: 'EAU PREMIERE SPRAY',
        price: '195',
        image: essencepremier,
    },
    {
        id: 55,
        series: 'Essence Elixirs',
        type: 'THE BATH SOAP',
        price: '49',
        image: soap,
    },
    {
        id: 56,
        series: 'Essence Elixirs',
        type: 'ON HAND CREAM',
        price: '91',
        image: cream,
    },
    {
        id: 57,
        series: 'Essence Elixirs',
        type: 'EAU FRESH LOTION',
        price: '81',
        image: lotion,
    },
    {
        id: 58,
        series: 'Essence Elixirs',
        type: 'EAU IN-SHOWER GEL',
        price: '61',
        image: shower,
    },
    {
        id: 59,
        series: 'Essence Elixirs',
        type: 'EAU ALL OVER SPRAY',
        price: '93',
        image: over,
    },
    {
        id: 60,
        series: 'Essence Elixirs',
        type: 'BODY CREAM',
        price: '159',
        image: cream,
    },
    {
        id: 61,
        series: 'Essence Elixirs',
        type: 'DEODORANT SPRAY',
        price: '70',
        image: deo,
    },
    {
        id: 62,
        series: 'Essence Elixirs',
        type: 'FRESH MOISTURE MIST',
        price: '69',
        image: moistureMist,
    },
    {
        id: 63,
        series: 'Essence Elixirs',
        type: 'NIGHT FRAGRANCE',
        price: '159',
        image: night,
    },

];

export default DataShopItems;
