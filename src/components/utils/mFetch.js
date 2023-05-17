let relojes = [
    /*RELOJES DE HOMBRE*/
    { id: "1", categoria: "reloj", imagen: "../../public/img-cards/relojHombreCasio.jpeg", marca: "CASIO", precio: 200, stock: "20" },
    { id: "2", categoria: "reloj", imagen: "../../public/img-cards/relojHombreCasio2.jpeg", marca: "CASIO", precio: 150, stock: "20" },
    { id: "3", categoria: "reloj", imagen: "../../public/img-cards/relojHombreG-Shock.jpeg", marca: "G-SHOCK", precio: 350, stock: "20" },
    { id: "4", categoria: "reloj", imagen: "../../public/img-cards/relojHombreG-Shock2.jpeg", marca: "G-SHOCK", precio: 320, stock: "20" },
    { id: "5", categoria: "reloj", imagen: "../../public/img-cards/relojHombreTommy.jpeg", marca: "TOMMY HILFIGER ", precio: 400, stock: "20" },
    { id: "6", categoria: "reloj", imagen: "../../public/img-cards/relojHombreTommy2.jpeg", marca: "TOMMY HILFIGER ", precio: 430, stock: "20" },

    /* RELOJES DE MUJER*/
    { id: "7", categoria: "reloj", imagen: "../../public/img-cards/relojMujerCartier.jpeg", marca: "CARTIER", precio: 390, stock: "20" },
    { id: "8", categoria: "reloj", imagen: "../../public/img-cards/relojMujerCasio.jpeg", marca: "CASIO", precio: 180, stock: "20 " },
    { id: "9", categoria: "reloj", imagen: "../../public/img-cards/relojMujerTommy.jpeg", marca: "TOMMY HILFIGER", precio: 350 },
    { id: "10", categoria: "reloj", imagen: "../../public/img-cards/relojMujerTommy2.jpeg", marca: "TOMMY HILFIGER", precio: 390, stock: "20" },
    { id: "11", categoria: "reloj", imagen: "../../public/img-cards/relojMujerG-Shock.jpeg", marca: "G-SHOCK", precio: 290, stock: "20" },
    { id: "12", categoria: "reloj", imagen: "../../public/img-cards/relojMujerG-Shock2.jpeg", marca: "G-SHOCK", precio: 270, stock: "20" },

    /*RELOJES SMARTWATCH*/
    { id: "13", categoria: "smartwatch", imagen: "../../public/img-cards/relojSmartwatchSamsung.jpeg", marca: "SAMSUNG", precio: 230, stock: "20" },
    { id: "14", categoria: "smartwatch", imagen: "../../public/img-cards/relojSmartwatchSamsung2.jpeg", marca: "SAMSUNG", precio: 250, stock: "20" },
    { id: "15", categoria: "smartwatch", imagen: "../../public/img-cards/relojSmartwatchSamsung3.jpeg", marca: "SAMSUNG", precio: 250, stock: "20" },
    { id: "16", categoria: "smartwatch", imagen: "../../public/img-cards/relojSmartwatchApple.jpeg", marca: "APPLE", precio: 430, stock: "20" },
    { id: "17", categoria: "smartwatch", imagen: "../../public/img-cards/relojSmartwatchApple2.jpeg", marca: "APPLE", precio: 400 },
    { id: "18", categoria: "smartwatch", imagen: "../../public/img-cards/relojSmartwatchApple3.jpeg", marca: "APPLE", precio: 400, stock: "20" },
    { id: "19", categoria: "smartwatch", imagen: "../../public/img-cards/relojSmartwatchXiaomi.jpeg", marca: "XIAOMI", precio: 75, stock: "20" },
    { id: "20", categoria: "smartwatch", imagen: "../../public/img-cards/relojSmartwatchXiaomi2.jpeg", marca: "XIAOMI", precio: 79, stock: "20" },
    { id: "21", categoria: "smartwatch", imagen: "../../public/img-cards/relojSmartwatchXiaomi3.png", marca: "XIAOMI", precio: 79, stock: "20" },
    { id: "22", categoria: "smartwatch", imagen: "../../public/img-cards/relojSmartwatchGarmin.jpeg", marca: "GARMIN", precio: 498, stock: "20" },
    { id: "23", categoria: "smartwatch", imagen: "../../public/img-cards/relojSmartwatchgarmin2.jpeg", marca: "GARMIN", precio: 390, stock: "20" },
    { id: "24", categoria: "smartwatch", imagen: "../../public/img-cards/relojSmartwatchgarmin3.jpeg", marca: "GARMIN", precio: 390, stock: "20" },
]


export const mFetch = (id) => {
    return new Promise((res, rej) => {

        setTimeout(() => {
            res(!id ? relojes : relojes.find(reloj => reloj.id === id))
        }, 1500)
    })
}

