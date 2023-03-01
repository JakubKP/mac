import Image from "next/image"
import firstImage from '@/public/images/info-1.jpg'
import secondImage from '@/public/images/info-2.jpg'
import thirdImage from '@/public/images/info-3.jpg'
import Link from "next/link"

const MainPage = () => {
  return (
    <div className='main-article'>
        <div className='zero-article-main'>
            <div className='article-image'>
                <Image src={thirdImage} alt='cars' />
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
                <Image src={firstImage} alt='cars' />
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
                <Image src={secondImage} alt='cars' />
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