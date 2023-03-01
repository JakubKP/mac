import Logo from '../public/images/logoL.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'


const Header = () => {

  const [showOverlay, setShowOverlay] = useState(false)
  const [activeBurgerMenu, setActiveBurgerMenu] = useState(false)

  return (
    <div className='header'>
      <div className='info-wrapper'>
        <div className='info'>
            <Link className='back-to-main hover-underline-animation' href='/' onMouseEnter={() => setShowOverlay(false)}>STRONA GŁÓWNA</Link>
            <Link className='cars hover-underline-animation' href='/samochody' onMouseEnter={() => setShowOverlay(true)}>SAMOCHODY</Link>
            <Link className='about hover-underline-animation' href='/o-nas' onMouseEnter={() => setShowOverlay(false)}>O NAS</Link>
            <Link className='contact hover-underline-animation' href='/kontakt' onMouseEnter={() => setShowOverlay(false)}>KONTAKT</Link>
        </div>
        <div className='overlay-burger-menu' onClick={() => setActiveBurgerMenu(prev => !prev)}>
          <FaBars />
        </div>
        <div className='logo'>
            <Image src={Logo} alt='logo' />
        </div>
      </div>
      <div className='cars-overlay' style={showOverlay ? { top: '96px'} : null} onMouseLeave={() => setShowOverlay(false)}>
          <div className='cars-buttons'>
            <Link href='/samochody/sportowe'>SPORTOWE</Link>
            <Link href='/samochody/luksusowe'>LUKSUSOWE</Link>
            <Link href='/samochody/miejskie'>MIEJSKIE</Link>
          </div>
      </div>
      <div className={activeBurgerMenu ? 'content-burger active' : 'content-burger'}>
            <Link className='back-to-main hover-underline-animation' href='/' onMouseEnter={() => setShowOverlay(false)}>STRONA GŁÓWNA</Link>
            <Link className='cars hover-underline-animation' href='/samochody' onMouseEnter={() => setShowOverlay(true)}>SAMOCHODY</Link>
            <Link className='about hover-underline-animation' href='/o-nas' onMouseEnter={() => setShowOverlay(false)}>O NAS</Link>
            <Link className='contact hover-underline-animation' href='/kontakt' onMouseEnter={() => setShowOverlay(false)}>KONTAKT</Link>
        </div>
    </div>
  )
}

export default Header;