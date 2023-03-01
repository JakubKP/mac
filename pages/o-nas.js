import Image from "next/image";
import imageAbout from '@/public/images/m4-4.jpg'
import Head from "next/head";

const About = () => {
  return (
    <>
    <Head>
        <title>O nas | Wypożyczalnia</title>
        <meta name="description" content="Wypożyczalnia samochodów" />
    </Head>
    <div className='about-site'>
        <div className='image-about'>
            <Image src={imageAbout} alt='car' />
        </div>
        <div className='info-about'>
        <div>
            <h2 style={{ fontSize: '16px', fontWeight: '500'}}>Jak dokonać rezerwacji samochodu?</h2>
        </div>
            <div className='text'>
                Dokonanie rezerwacji w naszej wypożyczalni Rent Dream Car jest niezwykle proste. Wystarczy wypełnić formularz kontaktowy na głównej stronie, bezpośrednio na podstronie każdego pojazdu lub klikając w zakładkę powyżej „rezerwacja”. Co należy uzupełnić? Musisz wybrać datę i godzinę odbioru, ale też i zwrotu pojazdu. Gdy dokonujesz rezerwacji na stronie głównej lub poprzez zakładkę, musisz również wybrać odpowiednią klasę, markę oraz model samochodu. Masz także do wyboru dodatkowe usługi. Następnie należy wypełnić dane kontaktowe oraz potwierdzić rezerwację. Po otrzymaniu drogą mailową wiadomości zwrotnej na wskazane konto należy dokonać opłaty (wraz z kaucją) lub zrobić to osobiście podczas odbioru. Na naszej głównej stronie znajdziesz również najczęściej zadawane pytania. W razie jakichkolwiek dodatkowych wyjaśnień zachęcamy Cię do skontaktowania się z nami poprzez biuro obsługi klienta i infolinię pod numerem (+48) 531 666 660.
            </div>
            <div>
                <h2 style={{ fontSize: '16px', fontWeight: '500'}}>Jak funkcjonujemy?</h2>
            </div>
            <div className='text'>
                Działamy jako profesjonalna wypożyczalnia samochodów na terenie Warszawy. Jednak na życzenie klienta, dostarczymy również pojazd w pozostałych częściach kraju. Co nas wyróżnia? Przede wszystkim duża flota samochodów najwyższej jakości we wszystkim klasach - premium, luksusowe, sportowe, czy miejskie. Dostosowujemy się do klientów indywidualnych oraz firm.
            </div>
        </div>
    </div>
    </>
  )
}

export default About;