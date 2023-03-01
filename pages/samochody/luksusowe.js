import CarBox from '@/components/CarBox'
import Front1 from '@/public/images/f10.jpg'
import Front2 from '@/public/images/f11.jpg'
import Front3 from '@/public/images/f12.jpg'
import Front4 from '@/public/images/f14.jpg'
import Front5 from '@/public/images/f15.jpg'
import Front6 from '@/public/images/f16.jpg'
import Head from 'next/head'

const allCars = [
    {name: 'Bmw X7', img: Front1, link: 'bmw-x7'},
    {name: 'Mercedes S', img: Front2, link: 'mercedes-s'},
    {name: 'Rolls Royce Phantom', img: Front3, link: 'rolls-royce-phantom'},
    {name: 'Bentley Continental GT', img: Front4, link: 'bentley-continental-gt'},
    {name: 'Mercedes S Maybach', img: Front5, link: 'mercedes-s-maybach'},
    {name: 'Mercedes GLS Maybach', img: Front6, link: 'mercedes-gls-maybach'},
]

const luxuryCars = () => {

    const dispalyCars = allCars.map((car, i) => (
        <CarBox key={i} image={car.img} name={car.name} link={car.link}/>
    ))
    return (
        <>
        <Head>
            <title>Samochody luksusowe | Wypożyczalnia</title>
            <meta name="description" content="Oferta samochodów" />
        </Head>
        <div className='cars-section'>
            {dispalyCars}
        </div>
        </>
    )
}

export default luxuryCars;