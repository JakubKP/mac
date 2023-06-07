import { useState } from "react";
import Image from "next/image";
import imageAbout from '@/public/images/puchary.jpg'
import Head from "next/head";
import Loader from "@/components/Loader";
import Reviews from "@/components/Reviews";

const About = () => {

    const [loading, setLoading] = useState(true)

  return (
    <>
    <Head>
        <title>O mnie | Trener Personalny Maciej Możdżeń</title>
        <meta name="description" content="Wypożyczalnia samochodów" />
    </Head>
    <div className='about-site'>
        <div className='image-about'>
            {loading ? <Loader /> : null}
            <Image src={imageAbout} alt='person' onLoadingComplete={() => setLoading(false)}/>
        </div>
        <div className='info-about'>
        <div>
            <h2 style={{ fontSize: '16px', fontWeight: '500'}}>Jak dokonać rezerwacji samochodu?</h2>
        </div>
            <div className='text'>
            Zrozum jak ważne jest zdrowie dla Ciebie i twoich bliskich. Sprawiam, że ludzie stają się szczęśliwsi. Pracuję razem z podopiecznymi nad przełamywaniem barier mentalnych. Rezultatem jest progress. Pomagam w pozbyciu się bólu, więc jeśli odczuwasz dolegliwości bólowe związane ze swoim trybem życia np praca siedząca to zajmę się wszystkimi szczegółami. Pomogłem wielu swoim podopiecznym pomogę i Tobie. Jeśli chcesz poprawić znacząco sylwetkę lub interesuje Cię zwiększenie możliwości Twojego ciała i umysłu to prędkość osiągania Twoich celów poszybuje w kosmos!
            </div>
            <div>
                <h2 style={{ fontSize: '16px', fontWeight: '500'}}>Jak funkcjonujemy?</h2>
            </div>
            <div className='text'>
            Jeśli jesteś gotowy(a) przełamać swoje ograniczenia i rozkwitnąć, to teraz jest czas, aby podjąć działanie. Daj mi szansę pomóc Ci odkryć nowe możliwości i osiągnąć znakomite rezultaty. Skontaktuj się ze mną już teraz, aby umówić się na bezpłatną konsultacje. Razem stworzymy plan działania, który przekształci Twoje życie i przyniesie niesamowite efekty. Pamiętaj, że jesteś zdolny(a) do znacznie więcej, niż Ci się wydaje. Pozwól mi być Twoim przewodnikiem i partnerem w tej niezwykłej podróży ku lepszemu ja. Zdecyduj się na zmianę. Zadzwoń lub napisz do mnie już teraz i rozpocznij swoją transformację! Twój osobisty trener.
            </div>
        </div>
    </div>
    <Reviews />
    </>
  )
}

export default About;