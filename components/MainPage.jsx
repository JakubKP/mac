import { useState } from "react"
import Image from "next/image"
import firstImage from '@/public/images/info-1.jpg'
import secondImage from '@/public/images/info-2.jpg'
import thirdImage from '@/public/images/info-3.jpg'
import Link from "next/link"
import Loader from "./Loader"

const MainPage = () => {

    const [loading1, setLoading1] = useState(true)
    const [loading2, setLoading2] = useState(true)
    const [loading3, setLoading3] = useState(true)

  return (
    <div className='main-article'>
        <div className='zero-article-main'>
            <div className='article-image'>
                {loading1 ? <Loader /> : null}
                <Image src={thirdImage} alt='cars' onLoadingComplete={() => setLoading1(false)}/>
            </div>
            <div className='article-container'>
                <div className='article-text'>
                    <h2 style={{ fontSize: '16px', fontWeight: '300'}}>
                        Nasza wypożyczalnia samochodów sportowych oferuje szeroki wybór modeli w tej klasie. To przede wszystkim takie marki jak BMW, Audi, Mercedes-Benz, Mercedes-AMG. Modele te będą idealne dla wszystkich, którzy są pasjonatami szybkiej jazdy oraz preferują najlepsze, niezapomniane emocje. W dodatku pojazdy w naszej flocie charakteryzują się nie tylko nieprzeciętnym wyglądem, ale również wieloma parametrami technicznymi, niczym prawdziwe auto wyścigowe.
                    </h2>
                </div>
                <div className='article-button'>
                    <Link href='/samochody'>Samochody</Link>
                </div>
            </div>
        </div>
        <div className='first-article-main' style={{ backgroundColor: '#131313'}}>
            <div className='article-image'>
                {loading2 ? <Loader /> : null}
                <Image src={firstImage} alt='cars' onLoadingComplete={() => setLoading2(false)}/>
            </div>
            <div className='article-container'>
                <div className='article-text'>
                    <h2 style={{ fontSize: '16px', fontWeight: '300'}}>
                        Wypożyczalnia działa od 6 lat, zaufało nam już wielu wspaniałych klientów, oraz wiele firm. Zawsze dostarczamy wszystko na czas i zgodnie z prośbą klienta.
                    </h2>
                </div>
                <div className='article-button'>
                    <Link href='/o-nas'>O nas</Link>
                </div>
            </div>
        </div>
        <div className='second-article-main'>
            <div className='article-image'>
                {loading3 ? <Loader /> : null}
                <Image src={secondImage} alt='cars' onLoadingComplete={() => setLoading3(false)}/>
            </div>
            <div className='article-container'>
                <div className='article-text'>
                    <h2 style={{ fontSize: '16px', fontWeight: '300'}}>
                        Zachęcamy Cię zatem do skorzystania z naszej oferty pojazdów sportowych, gdzie o wszelkich parametrach technicznych dowiesz się z poszczególnych opisów każdego z samochodu. Szczegółowy opis wraz ze zdjęciami samochodów pozwoli Ci na wybór odpowiedniego modelu. Wynajem sportowych aut przebiega w naszej firmie sprawnie i szybko. W razie pytań i wątpliwości zachęcamy do kontaktu z nami. Dopilnujemy, aby oczekiwania pokryły się z rzeczywistością. Wypożyczalnia sportowych aut to miejsce dla Ciebie!
                    </h2>
                </div>
                <div className='article-button'>
                    <Link href='/kontakt'>Kontakt</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPage