import Head from "next/head"

const kontakt = () => {
  return (
    <>
    <Head>
      <title>Kontakt | Wypożyczalnia</title>
      <meta name="description" content="Oferta samochodów" />
    </Head>
    <div className='info-site'>
        <div className='contact-details'>
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '500'}}>Kontakt</h2>
            </div>
            <div>ul. Jana 2 Szczecin</div>
            <div>+48 531 494 254</div>
            <div>email@gmail.com</div>
        </div>
        <div className='location'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76612.24944345302!2d17.95578267641125!3d53.125761718109565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x291c50963e78ad51%3A0x22393ae3a8174a87!2sMaciej%20Mo%C5%BCd%C5%BCe%C5%84%20-%20Trener%20Personalny!5e0!3m2!1spl!2spl!4v1686042970016!5m2!1spl!2spl" width="100%" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    </>
  )
}

export default kontakt