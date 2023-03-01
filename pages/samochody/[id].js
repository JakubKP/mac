import { useRouter } from "next/router"
import m4Baner from '@/public/images/m4-baner.jpg'
import m41 from '@/public/images/m4-1.jpg'
import m42 from '@/public/images/m4-2.jpg'
import m43 from '@/public/images/m4-3.jpg'
import m44 from '@/public/images/m4-4.jpg'
import rs7Baner from '@/public/images/audirs7-baner.jpg'
import rs71 from '@/public/images/audirs7-1.jpg'
import rs72 from '@/public/images/audirs7-2.jpg'
import rs73 from '@/public/images/audirs7-3.jpg'
import rs74 from '@/public/images/audirs7-4.jpg'
import a45Baner from '@/public/images/a45-1.jpg'
import a451 from '@/public/images/a45-2.jpg'
import a452 from '@/public/images/a45-3.jpg'
import a453 from '@/public/images/a45-4.jpg'
import a454 from '@/public/images/a45-5.jpg'
import m8Baner from '@/public/images/m8-2.jpg'
import m81 from '@/public/images/m8-1.jpg'
import m82 from '@/public/images/m8-3.jpg'
import m83 from '@/public/images/m8-5.jpg'
import m84 from '@/public/images/m8-4.jpg'
import rsq8Baner from '@/public/images/audirsq8-1.jpg'
import rsq81 from '@/public/images/audirsq8-2.jpg'
import rsq82 from '@/public/images/audirsq8-3.jpg'
import rsq83 from '@/public/images/audirsq8-4.jpg'
import rsq84 from '@/public/images/audirsq8-5.jpg'
import amggtBaner from '@/public/images/amggt-4.jpg'
import amggt1 from '@/public/images/amggt-1.jpg'
import amggt2 from '@/public/images/amggt-3.jpg'
import amggt3 from '@/public/images/amggt-5.jpg'
import amggt4 from '@/public/images/amggt-2.jpg'
import bmw7Baner from '@/public/images/bmwx7-1.jpg'
import bmw71 from '@/public/images/bmwx7-2.jpg'
import bmw72 from '@/public/images/bmwx7-3.jpg'
import bmw73 from '@/public/images/bmw7-4.jpeg'
import bmw74 from '@/public/images/bmwx7-5.jpg'
import sBaner from '@/public/images/s-1.jpg'
import s1 from '@/public/images/s-2.jpg'
import s2 from '@/public/images/s-3.jpg'
import s3 from '@/public/images/s-4.jpg'
import s4 from '@/public/images/s-5.jpg'
import rollsBaner from '@/public/images/roll-1.jpg'
import rolls1 from '@/public/images/roll-2.jpg'
import rolls2 from '@/public/images/roll-3.jpg'
import rolls3 from '@/public/images/roll-4.jpg'
import rolls4 from '@/public/images/roll-5.jpg'
import benBaner from '@/public/images/ben-1.jpg'
import ben1 from '@/public/images/ben-2.jpg'
import ben2 from '@/public/images/ben-3.jpg'
import ben3 from '@/public/images/ben-4.jpg'
import ben4 from '@/public/images/ben-5.jpg'
import mayBaner from '@/public/images/may-1.jpg'
import may1 from '@/public/images/may-2.jpg'
import may2 from '@/public/images/may-3.jpg'
import may3 from '@/public/images/may-4.jpg'
import may4 from '@/public/images/may-5.jpg'
import glsBaner from '@/public/images/gls-5.jpg'
import gls1 from '@/public/images/gls-4.jpg'
import gls2 from '@/public/images/gls-3.jpg'
import gls3 from '@/public/images/gls-1.jpg'
import gls4 from '@/public/images/gls-2.jpg'
import b5Baner from '@/public/images/5-2.jpg'
import b51 from '@/public/images/5-5.jpg'
import b52 from '@/public/images/5-3.jpg'
import b53 from '@/public/images/5-4.jpg'
import b54 from '@/public/images/5-1.jpg'
import b3Baner from '@/public/images/3-2.jpg'
import b31 from '@/public/images/3-1.jpg'
import b32 from '@/public/images/3-3.jpg'
import b33 from '@/public/images/3-4.jpg'
import b34 from '@/public/images/3-5.jpg'
import gleBaner from '@/public/images/gle-2.jpg'
import gle1 from '@/public/images/gle-1.jpg'
import gle2 from '@/public/images/gle-3.jpg'
import gle3 from '@/public/images/gle-4.jpg'
import gle4 from '@/public/images/gle-5.jpg'
import CarInfo from "@/components/CarInfo"
import CarInfoPage from "@/components/CarInfoPage"
import Head from "next/head"
import React from "react"

const cars = [
    {id: 'bmw-m4', image1: m4Baner, image2: m41, image3: m42, image4: m43, image5: m44, name: 'BMW M4', hp: '510', top: '3,4', drive: '4x4', max: '300', engine: '3.0L TwinTurbo', gearBox: 'Automatyczna', info: 'BMW M4 Coupé to purystyczne sportowe coupé o wyśmienitych właściwościach jezdnych. To zasługa wysokowydajnego silnika M TwinPower Turbo o mocy 480 KM, napędu tylnego oraz zaawansowanym technologiom zaczerpniętym ze sportów motorowych, takim jak układ jezdny M z aktywnym mechanizmem różnicowym M. Doskonale zestopniowana 6-biegowa skrzynia manualna M z krótkimi, precyzyjnymi skokami dźwigni umożliwia niezwykle intensywną interakcję między kierowcą a pojazdem. Sportowy wygląd zewnętrzny oraz charakterystyczne dla M wyposażenie i detale dodatkowo podkreślają dynamiczny charakter BMW M4 Coupé.', about: 'BMW M4 Competition Coupé to najmocniejszy model BMW serii 4 Coupé M. Wyposażone w wysokowydajny sześciocylindrowy rzędowy silnik benzynowy M TwinPower Turbo o mocy 510 KM oraz wiele rozwiązań układu napędowego i jezdnego zaczerpniętych z motorsportu oferuje dynamikę jazdy na najwyższym poziomie. Opcjonalny napęd na wszystkie koła M xDrive z aktywnym mechanizmem różnicowym M gwarantuje maksymalną dynamikę jazdy na co dzień i na torze wyścigowym. Atletyczny charakter to również zasługa wyrazistej stylistyki przodu, boków i tyłu, a także opcjonalnych karbonowych elementów M wewnątrz i na zewnątrz.', price: {one: '2000', two: '1500', three: '1000', four: '700', five: '600'}},
    {id: 'audi-rs7', image1: rs7Baner, image2: rs71, image3: rs72, image4: rs73, image5: rs74, name: 'Audi RS7', hp: '610', top: '3,4', drive: '4x4', max: '305', engine: '4.0L', gearBox: 'Automatyczna', info: 'Audi RS 7 Sportback performance wniesie do Twojej codzienności imponującą dynamikę. Opcjonalne sportowe zawieszenie RS plus z systemem Dynamic Ride Control (DRC) i opcjonalny pakiet RS dynamic plus z prędkością maksymalną podwyższoną do 305 km/h zapewnią przyjemność z jazdy.', about: 'Liczby, które przykuwają uwagę: czterolitrowy silnik V8 biturbo TFSI o mocy 463 kW zapewnia przyspieszenie od 0 do 100 km/h w 3,4 sekundy.', price: {one: '2500', two: '2000', three: '1500', four: '1000', five: '800'}},
    {id: 'mercedes-a45', image1: a45Baner, image2: a451, image3: a452, image4: a453, image5: a454, name: 'Mercedes A45 AMG', hp: '387', top: '4,0', drive: '4x4', max: '250', engine: '2.0L', gearBox: 'Automatyczna', info: 'A 45 4Matic+ (2.0 R4; 387 KM, 480 Nm) z 8-biegową przekładnią dwusprzęgłową AMG SPEEDSHIFT DCT 8G i napędem na wszystkie koła, przyspieszenie 0-100 km/h: 4,0 s, prędkość maksymalna: 250 km/h, średnie zużycie paliwa: 8,7-9,1 l/100 km.', about: 'Przetestuj już dziś.', price: {one: '1300', two: '1000', three: '800', four: '700', five: '600'}},
    {id: 'bmw-m8', image1: m8Baner, image2: m81, image3: m82, image4: m83, image5: m84, name: 'BMW M8', hp: '610', top: '3,2', drive: '4x4', max: '310', engine: '4.4L', gearBox: 'Automatyczna', info: 'Wystarczy wspomnieć, że M8 (zarówno w wersji coupe, jak i kabriolet) napędzane jest tym samym podwójnie doładowanym silnikiem V8 o pojemności 4,4 l co M5. Oznacza to 600 KM i 750 Nm. Przekłada się to na przyspieszenie do 100 km/h w imponujące 3,3 s', about: ' BMW M Serii 8 Coupé zapewniają maksymalnie sportową i luksusową radość z jazdy – zarówno na drodze, jak i na torze wyścigowym.', price: {one: '2500', two: '2000', three: '1500', four: '1000', five: '800'}},
    {id: 'mercedes-amg-gt-s', image1: amggtBaner, image2: amggt1, image3: amggt2, image4: amggt3, image5: amggt4, name: 'Mercedes AMG GTR S', hp: '560', top: '3,3', drive: '4x4', max: '299', engine: '4.0L', gearBox: 'Automatyczna', info: 'Mercedes-AMG GT R ma pod maską podwójnie doładowane 4-litrowe V8, które generuje moc 585 i maksymalny moment obrotowy 700 Nm (+50 Nm). Zwiększona dawka mocy oraz momentu w porównaniu do odmiany GT S pozwoliła "urwać" z wyniku przyspieszenia do 100 km/h 0,2 s i zwiększyć maksymalną prędkość o 8 km/h do 318 km/h.', about: 'Mercedes wyszedł z założenia, iż dla niektórych 510 KM pod maską GT S może być niewystarczającą dawką mocy i przygotował jeszcze mocniejszą odmianę modelu GT.', price: {one: '2800', two: '2200', three: '1700', four: '1200', five: '1100'}},
    {id: 'audi-rsq8', image1: rsq8Baner, image2: rsq81, image3: rsq82, image4: rsq83, image5: rsq84, name: 'Audi RSQ8', hp: '600', top: '3,8', drive: '4x4', max: '305', engine: '4.0L', gearBox: 'Automatyczna', info: 'Daj upust emocjom: za kierownicą Audi RS Q8 przyjdzie Ci to z niespotykaną dotąd łatwością. Na życzenie RS Q8 oferuje zwiększenie prędkości maksymalnej do 280 km/h lub 305 km/h (ograniczenie elektroniczne).', about: 'Audi RS Q8 jest seryjnie wyposażone w stały napęd na cztery koła quattro, a opcjonalny sportowy mechanizm różnicowy steruje selektywnym rozdziałem momentu obrotowego pomiędzy kołami. Adaptacyjne zawieszenie pneumatyczne z typową dla modeli RS charakterystyką jak również tylna oś skrętna gwarantują optymalną zwrotność i maksymalną stabilność jazdy.', price: {one: '2500', two: '2000', three: '1500', four: '1000', five: '800'}},
    {id: 'bmw-x7', image1: bmw7Baner, image2: bmw71, image3: bmw72, image4: bmw73, image5: bmw74, name: 'BMW X7', hp: '280', top: '5,2', drive: '4x4', max: '250', engine: '3.0L', gearBox: 'Automatyczna', info: 'BMW X7 mierzy 515,1 cm długości, 200,0 cm szerokości (221,8 cm z lusterkami) i 180,5 cm wysokości. Jego rozstaw osi to 310,5 cm. Bazowa pojemność bagażnika wynosi 750 litrów, a maksymalnie można ją powiększyć do 2120 l.', about: 'BMW X7 towiększy i bardziej prestiżowy brat SUV-a X5, jest on bezpośrednim konkurentem Mercedesa GLS.', price: {one: '2500', two: '2000', three: '1500', four: '1000', five: '800'}},
    {id: 'mercedes-s', image1: sBaner, image2: s1, image3: s2, image4: s3, image5: s4, name: 'Mercedes S Klasa', hp: '810', top: '3,3', drive: '4x4', max: '290', engine: '4.0L', gearBox: 'Automatyczna', info: 'Moc systemowa rzędu 802 KM i maksymalny moment obrotowy 1430 niutonometrów zapewniają maszynie przyspieszenie od zera do 100 km/h w około 3,3 sekundy. Prędkość maksymalną ograniczono do 290 km/h (wersja z opcjonalnym pakietem kierowcy AMG).', about: 'Nowy Mercedes klasy S nie rozczarowuje – to nadal ikona luksusu, prestiżu i dobrego smaku.', price: {one: '2500', two: '2000', three: '1500', four: '1000', five: '800'}},
    {id: 'rolls-royce-phantom', image1: rollsBaner, image2: rolls1, image3: rolls2, image4: rolls3, image5: rolls4, name: 'Rolls Royce Phantom', hp: '552', top: '4,8', drive: '4x4', max: '270', engine: '6.75L', gearBox: 'Automatyczna', info: 'Szeroki słupek D, wyraźnie opadająca ku tyłowi linia boczna, mocno geometryczne kształty i dająca wrażenie solidności, niemal monumentalna sylwetka. Już w „krótkiej” wersji SWB auto prezentuje się majestatycznie, ale nic dziwnego – mierzy dokładnie 5762 mm długości.', about: 'Rolls-Royce Phantom po liftingu to majstersztyk w każdym calu.', price: {one: '9000', two: '8000', three: '7500', four: '5000', five: '4000'}},
    {id: 'bentley-continental-gt', image1: benBaner, image2: ben1, image3: ben2, image4: ben3, image5: ben4, name: 'Bentley Continental GT', hp: '650', top: '3,2', drive: '4x4', max: '330', engine: '4.0L', gearBox: 'Automatyczna', info: 'W roku 2022 sprawy mają się zaskakująco podobnie. Główną atrakcją nowego Bentleya Continentala GT Speed jest zawarta już w samej nazwie prędkość. Ta sięga tutaj aż 335 km/h. Nie jest ona jednak zasługą modnego teraz, elektrycznego napędu, ani nawet żadnej formy hybrydyzacji.', about: ' Bentley Continental GT Speed pokonał konkurencję, zdobywając tytuł Samochodu Roku 2022.', price: {one: '3500', two: '3000', three: '2500', four: '2000', five: '1800'}},
    {id: 'mercedes-s-maybach', image1: mayBaner, image2: may1, image3: may2, image4: may3, image5: may4, name: 'Mercedes S Maybach', hp: '810', top: '3,2', drive: '4x4', max: '310', engine: '4.0L', gearBox: 'Automatyczna', info: 'Nowy Mercedes-Maybach klasy S mierzy 546,9 cm długości, 192,1 cm szerokości i 151,0 cm wysokości. Rozstaw osi wynosi 339,6 cm i został zwiększony aż o 18 cm w porównaniu z długą wersją Mercedesa klasy S (o 29 cm w porównaniu ze „zwykłą” S-klasą). Dodatkowe centymetry w całości przypadają podróżującym z tyłu.', about: 'Mercedes-Maybach klasy S to flagowa limuzyna ze Stuttgartu', price: {one: '3500', two: '3000', three: '2500', four: '2000', five: '1800'}},
    {id: 'mercedes-gls-maybach', image1: glsBaner, image2: gls1, image3: gls2, image4: gls3, image5: gls4, name: 'Mercedes GLS Maybach', hp: '650', top: '3,9', drive: '4x4', max: '300', engine: '4.0L', gearBox: 'Automatyczna', info: 'Mercedes-Maybach GLS 600 ma czterolitrowy silnik biturbo V8, o mocy 579 KM i maksymalny moment obrotowy 730 Nm. 2,8 tonowy kolos przyspiesza do 100 km/h w 4,9 sekundy i osiąga maksymalną prędkość 250 km/h.', about: 'Mercedes-Maybach GLS zapewnia najwyższy poziom luksusu. Wyjątkowe połączenie przestrzeni, ekskluzywności i najnowocześniejszych technologii.', price: {one: '3500', two: '3000', three: '2500', four: '2000', five: '1800'}},
    {id: 'bmw-5', image1: b5Baner, image2: b51, image3: b52, image4: b53, image5: b54, name: 'BMW 5', hp: '230', top: '6,2', drive: '4x4', max: '240', engine: '2.0L', gearBox: 'Automatyczna', info: 'BMW serii 5 Touring mierzy 496,3 cm długości, 186,8 cm szerokości (212,6 cm z lusterkami) i 149,8 cm wysokości. Jego rozstaw osi to 297,5 cm. Bazowa pojemność bagażnika wynosi 560 litrów, a maksymalnie można ją powiększyć do 1700 l.', about: 'Idealne do jazdy po mieście.', price: {one: '500', two: '400', three: '350', four: '300', five: '220'}},
    {id: 'bmw-3', image1: b3Baner, image2: b31, image3: b32, image4: b33, image5: b34, name: 'BMW 3', hp: '210', top: '7,4', drive: '4x4', max: '230', engine: '2.0L', gearBox: 'Automatyczna', info: 'BMW serii 3 Touring mierzy 470,9 cm długości, 182,7 cm szerokości (206,8 cm z lusterkami) i 144,0 cm wysokości. Jego rozstaw osi to 285,1 cm. Bazowa pojemność bagażnika wynosi 500 litrów, a maksymalnie można ją powiększyć do 1510 l.', about: 'Idealne auto na podróż', price: {one: '500', two: '400', three: '350', four: '300', five: '220'}}, {id: 'mercedes-gle-220', image1: gleBaner, image2: gle1, image3: gle2, image4: gle3, image5: gle4, name: 'Mercedes GLE 220', hp: '270', top: '7,3', drive: '4x4', max: '220', engine: '2.0L', gearBox: 'Automatyczna', info: 'Mercedes GLE (V167) mierzy 492,4 cm długości, 202,2 cm szerokości (215,7 cm z lusterkami) i 179,7 cm wysokości. Jego rozstaw osi to 299,5 cm. Bazowa pojemność bagażnika wynosi 630 litrów, a maksymalnie można ją powiększyć do 2055 l.', about: 'Idealny SUV na wycieczkę.', price: {one: '600', two: '500', three: '450', four: '400', five: '310'}},
]

const Car = () => {

    const router = useRouter()

    return (
        <>
        {cars.map((car, i) => {
                if(car.id === router.query.id) {
                    console.log(car.name)
                    return (
                        <Head key={i}>
                            <title>{`${car.name} | Wypożyczalnia`}</title>
                            <meta name="description" content={car.name} />
                        </Head>
            )}})}
            <div className='car-info-baner'>
            {cars.map((car, i) => {
                if(car.id === router.query.id) {
                    return (
                        <CarInfo key={i} {...car}/>
            )}})}
            </div>
            <div className='car-info-page'>
            {cars.map((car, i) => {
                if(car.id === router.query.id) {
                    return (
                        <CarInfoPage key={i} {...car}/>
            )}})}
            </div>
        </>
)}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://raw.githubusercontent.com/JakubKP/cars-api/main/cars.json`)
    const cars = await res.json()
  
    const car = cars.find(car => car.link === params.id)
  
    return {
      props: {
        car,
      },
    }
  }

  export async function getStaticPaths() {
    const res = await fetch(`https://raw.githubusercontent.com/JakubKP/cars-api/main/cars.json`)
    const cars = await res.json()

    const paths = cars.map((car) => ({
        params: { id: car.link },
    }));
    return { paths, fallback: false };
}

export default Car;