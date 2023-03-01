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
            <div>+48 789 092 213</div>
            <div>wypozyczalnia@gmail.com</div>
        </div>
        <div className='location'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9507.531951990635!2d14.540427432621772!3d53.43480042046418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa09150730134d%3A0xffc33010e99286d0!2sAleja%20Papie%C5%BCa%20Jana%20Paw%C5%82a%20II%2C%2070-413%20Szczecin!5e0!3m2!1spl!2spl!4v1674754930555!5m2!1spl!2spl" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    </>
  )
}

export default kontakt