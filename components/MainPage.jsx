import { useState } from "react"
import Image from "next/image"
import firstImage from '@/public/images/maciek2.jpg'
import secondImage from '@/public/images/maciek4.jpg'
import thirdImage from '@/public/images/maciek1.jpg'
import Link from "next/link"
import Loader from "./Loader"
import Reviews from "./Reviews"

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
                    Zrozum jak ważne jest zdrowie dla Ciebie i twoich bliskich. Sprawiam, że ludzie stają się szczęśliwsi. Pracuję razem z podopiecznymi nad przełamywaniem barier mentalnych. Rezultatem jest progress. Pomagam w pozbyciu się bólu, więc jeśli odczuwasz dolegliwości bólowe związane ze swoim trybem życia np praca siedząca to zajmę się wszystkimi szczegółami. Pomogłem wielu swoim podopiecznym pomogę i Tobie. Jeśli chcesz poprawić znacząco sylwetkę lub interesuje Cię zwiększenie możliwości Twojego ciała i umysłu to prędkość osiągania Twoich celów poszybuje w kosmos!
                    </h2>
                </div>
                <div className='article-button'>
                    <Link href='/przemiany'>Przemiany</Link>
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
                    <Link href='/o-mnie'>O Mnie</Link>
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
        <Reviews />
    </div>
  )
}

export default MainPage