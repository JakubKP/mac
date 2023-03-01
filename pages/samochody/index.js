import CarBox from '@/components/CarBox'
import Front1 from '@/public/images/f1.png'
import Front3 from '@/public/images/f3.png'
import Front5 from '@/public/images/f5.jpeg'
import Front6 from '@/public/images/f6.jpeg'
import Front7 from '@/public/images/f7.png'
import Front9 from '@/public/images/f9.png'
import Front10 from '@/public/images/f10.jpg'
import Front11 from '@/public/images/f11.jpg'
import Front12 from '@/public/images/f12.jpg'
import Front13 from '@/public/images/f14.jpg'
import Front14 from '@/public/images/f15.jpg'
import Front15 from '@/public/images/f16.jpg'
import Front18 from '@/public/images/f19.jpg'
import Front19 from '@/public/images/f20.jpg'
import Front20 from '@/public/images/f21.jpg'
import Head from 'next/head'

const Cars = ({ posts }) => {

    const imageMap = {
        'Front1': Front1,
        'Front3': Front3,
        'Front5': Front5,
        'Front6': Front6,
        'Front7': Front7,
        'Front9': Front9,
        'Front10': Front10,
        'Front11': Front11,
        'Front12': Front12,
        'Front13': Front13,
        'Front14': Front14,
        'Front15': Front15,
        'Front18': Front18,
        'Front19': Front19,
        'Front20': Front20,
      };

    return (
        <>
            <Head>
                <title>Samochody | Wypożyczalnia</title>
                <meta name="description" content="Oferta samochodów" />
            </Head>
            <div className='cars-section'>
                {posts.map((car, i) => (
                <CarBox key={i} image={imageMap[car.img]} name={car.name} link={car.link}/>
            ))}
            </div>
        </>
    )
}

export async function getStaticProps() {

    const res = await fetch('https://raw.githubusercontent.com/JakubKP/cars-api/main/cars.json')
    const posts = await res.json()
  
    return {
      props: {
        posts,
      },
    }
  }

  export default Cars;