import CarBox from '@/components/CarBox'
import Front3 from '@/public/images/f19.jpg'
import Front4 from '@/public/images/f20.jpg'
import Front5 from '@/public/images/f21.jpg'
import Head from 'next/head'

const allCars = [
    {name: 'BMW 5', img: Front3, link: 'bmw-5'},
    {name: 'BMW 3', img: Front4, link: 'bmw-3'},
    {name: 'Mercedes GLE 220', img: Front5, link: 'mercedes-gle-220'},
]

const cityCars = () => {

    const dispalyCars = allCars.map((car, i) => (
        <CarBox key={i} image={car.img} name={car.name} link={car.link}/>
    ))
    return (
        <>
        <Head>
            <title>Samochody miejskie | Wypożyczalnia</title>
            <meta name="description" content="Oferta samochodów" />
        </Head>
        <div className='cars-section'>
            {dispalyCars}
        </div>
        </>
    )
}

export default cityCars;