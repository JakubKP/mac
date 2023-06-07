import Logo from '../public/images/logomaciek.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'


const Header = () => {

  const [activeBurgerMenu, setActiveBurgerMenu] = useState(false)

  return (
    <div className='header'>
      <div className='info-wrapper'>
        <div className='info'>
            <Link className='back-to-main hover-underline-animation' href='/'>STRONA GŁÓWNA</Link>
            <Link className='cars hover-underline-animation' href='/przemiany'>PRZEMIANY</Link>
            <Link className='about hover-underline-animation' href='/o-mnie'>O MNIE</Link>
            <Link className='contact hover-underline-animation' href='/kontakt'>KONTAKT</Link>
        </div>
        <div className='overlay-burger-menu' onClick={() => setActiveBurgerMenu(prev => !prev)}>
          <FaBars />
        </div>
        <div className='logo'>
            <Image src={Logo} alt='logo' width={200}/>
        </div>
      </div>
      <div className={activeBurgerMenu ? 'content-burger active' : 'content-burger'}>
            <Link className='back-to-main hover-underline-animation' href='/'>STRONA GŁÓWNA</Link>
            <Link className='cars hover-underline-animation' href='/samochody'>SAMOCHODY</Link>
            <Link className='about hover-underline-animation' href='/o-mnie'>O MNIE</Link>
            <Link className='contact hover-underline-animation' href='/kontakt'>KONTAKT</Link>
        </div>
    </div>
  )
}

export default Header;