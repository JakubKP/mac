import CarBox from '@/components/CarBox'
import Front1 from '@/public/images/f1.png'
import Front3 from '@/public/images/f3.png'
import Front5 from '@/public/images/f5.jpeg'
import Front6 from '@/public/images/f6.jpeg'
import Front7 from '@/public/images/f7.png'
import Front9 from '@/public/images/f9.png'
import Head from 'next/head'

const allCars = [
    {name: 'Audi RS7', img: Front9, link: 'audi-rs7'},
    {name: 'Audi RSQ8', img: Front5, link: 'audi-rsq8'},
    {name: 'BMW M8 Competition', img: Front6, link: 'bmw-m8'},
    {name: 'Mercedes AMG GT S', img: Front1, link: 'mercedes-amg-gt-s'},
    {name: 'BMW M4', img: Front7, link: 'bmw-m4'},
    {name: 'Mercedes A45 AMG', img: Front3, link: 'mercedes-a45'},
]

const sportCars = () => {

    const dispalyCars = allCars.map((car, i) => (
        <CarBox key={i} image={car.img} name={car.name} link={car.link}/>
    ))
    return (
        <>
        <Head>
            <title>Samochody sportowe | Wypożyczalnia</title>
            <meta name="description" content="Oferta samochodów" />
        </Head>
        <div className='cars-section'>
            {dispalyCars}
        </div>
        </>
    )
}

export default sportCars;