import Image from "next/image";
import Logo from '@/public/images/logomaciek.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='wrapper'>
          <div className='footer-logo'>
            <Image src={Logo} alt='logo' />
          </div>
          <div className='about'>
            <div>O NAS</div>
            <div>
              Jesteśmy wypożyczalnią aut sportowych działającą na terenie Szczecina i okolic. W swoich działaniach stawiamy na profesjonalną obsługę, terminowość i pełne zadowolenia naszych Klientów.</div>
            </div>
          <div className='contact'>
            <div>ul. Jana 2 Szczecin</div>
            <div>wypozyczalnia@gmail.com</div>
            <div>+48 789 092 213</div>
          </div>
      </div>
    </div>
  )
}

export default Footer;