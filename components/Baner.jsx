import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import Baner1 from '../public/images/maciekbaner.jpg'
import Baner2 from '../public/images/maciekbaner.jpg'
import Baner3 from '../public/images/maciekbaner.jpg'

const Baner = () => {

    const [active, setActive] = useState(0)

    const banerRef = useRef(null)
    const ref0 = useRef(null)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)
    const ref7 = useRef(null)
    const ref8 = useRef(null)
    const ref9 = useRef(null)
    const ref10 = useRef(null)
    const ref11 = useRef(null)
    const ref12 = useRef(null)
    const ref13 = useRef(null)
    const ref14 = useRef(null)
    const ref15 = useRef(null)
    const ref16 = useRef(null)
    const ref17 = useRef(null)
    const ref18 = useRef(null)
    const ref19 = useRef(null)
    const ref20 = useRef(null)
    const ref21 = useRef(null)
    const ref22 = useRef(null)
    const ref23 = useRef(null)
    const ref24 = useRef(null)
    const ref25 = useRef(null)
    const ref26 = useRef(null)
    const ref27 = useRef(null)
    const ref28 = useRef(null)
    const ref29 = useRef(null)
    const ref30 = useRef(null)
    const ref31 = useRef(null)
    const ref32 = useRef(null)
    const ref33 = useRef(null)
    const ref34 = useRef(null)
    const ref35 = useRef(null)
    const ref36 = useRef(null)
  
    useEffect(() => {
      let start
      if(active === 0) {
        start = setTimeout(() => {
          banerRef.current.style.opacity = 1
          setActive(1)
        }, 1000)
      }
  
      const textInterval = setInterval(() => {
        setTimeout(() => {
          setActive((prev) => {
            if (prev == 3) {
              return prev = 1
            } else {
              return prev + 1
            }
          })
        }, 2000)
      }, 5000)
      return () => {
        clearTimeout(start)
        clearInterval(textInterval)
      }
    }, [active])
  
    useEffect(() => {
      const ids = []
      if(active === 1) {
        ids[0] = setTimeout(() => ref0.current.style.opacity = 1, 200)
        ids[1] = setTimeout(() => ref1.current.style.opacity = 1, 300)
        ids[2] = setTimeout(() => ref2.current.style.opacity = 1, 400)
        ids[3] = setTimeout(() => ref3.current.style.opacity = 1, 500)
        ids[4] = setTimeout(() => ref4.current.style.opacity = 1, 600)
        ids[5] = setTimeout(() => ref5.current.style.opacity = 1, 700)
        ids[6] = setTimeout(() => ref6.current.style.opacity = 1, 800)
        ids[7] = setTimeout(() => ref7.current.style.opacity = 1, 900)
        ids[8] = setTimeout(() => ref8.current.style.opacity = 1, 1000)
        ids[9] = setTimeout(() => ref9.current.style.opacity = 1, 1100)
        ids[10] = setTimeout(() => ref10.current.style.opacity = 1, 1200)
        ids[11] = setTimeout(() => ref11.current.style.opacity = 1, 1300)
      } else if (active === 2) {
        ids[0] = setTimeout(() => ref12.current.style.opacity = 1, 200)
        ids[1] = setTimeout(() => ref13.current.style.opacity = 1, 300)
        ids[2] = setTimeout(() => ref14.current.style.opacity = 1, 400)
        ids[3] = setTimeout(() => ref15.current.style.opacity = 1, 500)
        ids[4] = setTimeout(() => ref16.current.style.opacity = 1, 600)
        ids[5] = setTimeout(() => ref17.current.style.opacity = 1, 700)
        ids[6] = setTimeout(() => ref18.current.style.opacity = 1, 800)
        ids[7] = setTimeout(() => ref19.current.style.opacity = 1, 900)
        ids[8] = setTimeout(() => ref20.current.style.opacity = 1, 1000)
        ids[9] = setTimeout(() => ref21.current.style.opacity = 1, 1100)
        ids[10] = setTimeout(() => ref22.current.style.opacity = 1, 1200)
        ids[11] = setTimeout(() => ref23.current.style.opacity = 1, 1300)
      } else if (active === 3) {
        ids[0] = setTimeout(() => ref24.current.style.opacity = 1, 200)
        ids[1] = setTimeout(() => ref25.current.style.opacity = 1, 300)
        ids[2] = setTimeout(() => ref26.current.style.opacity = 1, 400)
        ids[3] = setTimeout(() => ref27.current.style.opacity = 1, 500)
        ids[4] = setTimeout(() => ref28.current.style.opacity = 1, 600)
        ids[5] = setTimeout(() => ref29.current.style.opacity = 1, 700)
        ids[6] = setTimeout(() => ref30.current.style.opacity = 1, 800)
        ids[7] = setTimeout(() => ref31.current.style.opacity = 1, 900)
        ids[8] = setTimeout(() => ref32.current.style.opacity = 1, 1000)
        ids[9] = setTimeout(() => ref33.current.style.opacity = 1, 1100)
        ids[10] = setTimeout(() => ref34.current.style.opacity = 1, 1200)
        ids[11] = setTimeout(() => ref35.current.style.opacity = 1, 1300)
        ids[12] = setTimeout(() => ref36.current.style.opacity = 1, 1400)
      }
      return () => {
        ids.forEach((id) => {
          clearTimeout(id)
        })
      }
    }, [active])

    return (
        <div className='baner' ref={banerRef} style={{ opacity: 0 }}>
        <div className='baner-buttons'>
          <span className='baner-button' style={active === 1 ? {backgroundColor: 'white', height: '3px'} : null} onClick={() => setActive(1)}></span>
          <span className='baner-button' style={active === 2 ? {backgroundColor: 'white', height: '3px'} : null} onClick={() => setActive(2)}></span>
          <span className='baner-button' style={active === 3 ? {backgroundColor: 'white', height: '3px'} : null} onClick={() => setActive(3)}></span>
        </div>
          <div className='first-baner' style={active === 1 ? { opacity: 1 } : null}>
            <div className='text-container'>
              <div className='beauty-text'>
                <div ref={ref0} style={active === 1 ? null : {opacity: 0, transition: '0s'}}>T</div>
                <div ref={ref1} style={active === 1 ? null : {opacity: 0, transition: '0s'}}>R</div>
                <div ref={ref2} style={active === 1 ? null : {opacity: 0, transition: '0s'}}>E</div>
                <div ref={ref3} style={active === 1 ? null : {opacity: 0, transition: '0s'}}>N</div>
                <div ref={ref4} style={active === 1 ? null : {opacity: 0, transition: '0s'}}>E</div>
                <div ref={ref5} style={active === 1 ? null : {opacity: 0, transition: '0s'}}>R</div>
                <div ref={ref6} style={active === 1 ? null : {opacity: 0, transition: '0s'}}>W</div>
                <div ref={ref7} style={active === 1 ? null : {opacity: 0, transition: '0s'}}>E</div>
              </div>
              <div className='beauty-text'>
                <div ref={ref8} style={active === 1 ? null : {opacity: 0, transition: '0s'}}>A</div>
                <div ref={ref9} style={active === 1 ? null : {opacity: 0, transition: '0s'}}>U</div>
                <div ref={ref10} style={active === 1 ? null : {opacity: 0, transition: '0s'}}>T</div>
                <div ref={ref11} style={active === 1 ? null : {opacity: 0, transition: '0s'}}>A</div>
              </div>
              <div className='main-text' style={active === 1 ? { opacity: 1, left: '0px', transition: '1s'} : { opacity: 0, left: '-700px', transition: '0s'}}>
                <h1>POCZUJ PRAWDZIWĄ MOC</h1>
              </div>
              <Link href='/samochody' className='main-button'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Sprawdź ofertę
              </Link>
            </div>
            <Image src={Baner3} alt='baner'/>
          </div>
          <div className='second-baner' style={active === 2 ? { opacity: 1 } : null}>
              <div className='text-container'>
              <div className='beauty-text'>
                <div ref={ref12} style={active === 2 ? null : {opacity: 0, transition: '0s'}}>R</div>
                <div ref={ref13} style={active === 2 ? null : {opacity: 0, transition: '0s'}}>O</div>
                <div ref={ref14} style={active === 2 ? null : {opacity: 0, transition: '0s'}}>D</div>
                <div ref={ref15} style={active === 2 ? null : {opacity: 0, transition: '0s'}}>Z</div>
                <div ref={ref16} style={active === 2 ? null : {opacity: 0, transition: '0s'}}>I</div>
                <div ref={ref17} style={active === 2 ? null : {opacity: 0, transition: '0s'}}>N</div>
                <div ref={ref18} style={active === 2 ? null : {opacity: 0, transition: '0s'}}>N</div>
                <div ref={ref19} style={active === 2 ? null : {opacity: 0, transition: '0s'}}>E</div>
              </div>
              <div className='beauty-text'>
                <div ref={ref20} style={active === 2 ? null : {opacity: 0, transition: '0s'}}>A</div>
                <div ref={ref21} style={active === 2 ? null : {opacity: 0, transition: '0s'}}>U</div>
                <div ref={ref22} style={active === 2 ? null : {opacity: 0, transition: '0s'}}>T</div>
                <div ref={ref23} style={active === 2 ? null : {opacity: 0, transition: '0s'}}>A</div>
              </div>
              <div className='main-text' style={active === 2 ? { opacity: 1, left: '0px', transition: '1s'} : { opacity: 0, left: '-700px', transition: '0s'}}>
              <h2>NA RODZINNE WYJAZDY</h2>
              </div>
              <Link href='/samochody' className='main-button'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Sprawdź ofertę
              </Link>
              </div>
            <Image src={Baner2} alt='baner'/>
          </div>
          <div className='third-baner' style={active === 3 ? { opacity: 1 } : null}>
              <div className='text-container'>
              <div className='beauty-text'>
                <div ref={ref24} style={active === 3 ? null : {opacity: 0, transition: '0s'}}>D</div>
                <div ref={ref25} style={active === 3 ? null : {opacity: 0, transition: '0s'}}>L</div>
                <div ref={ref26} style={active === 3 ? null : {opacity: 0, transition: '0s'}}>A</div>
              </div>
              <div className='beauty-text'>
                <div ref={ref27} style={active === 3 ? null : {opacity: 0, transition: '0s'}}>W</div>
                <div ref={ref28} style={active === 3 ? null : {opacity: 0, transition: '0s'}}>S</div>
                <div ref={ref29} style={active === 3 ? null : {opacity: 0, transition: '0s'}}>Z</div>
                <div ref={ref30} style={active === 3 ? null : {opacity: 0, transition: '0s'}}>Y</div>
                <div ref={ref31} style={active === 3 ? null : {opacity: 0, transition: '0s'}}>S</div>
                <div ref={ref32} style={active === 3 ? null : {opacity: 0, transition: '0s'}}>T</div>
                <div ref={ref33} style={active === 3 ? null : {opacity: 0, transition: '0s'}}>K</div>
                <div ref={ref34} style={active === 3 ? null : {opacity: 0, transition: '0s'}}>I</div>
                <div ref={ref35} style={active === 3 ? null : {opacity: 0, transition: '0s'}}>C</div>
                <div ref={ref36} style={active === 3 ? null : {opacity: 0, transition: '0s'}}>H</div>
              </div>
              <div className='main-text' style={active === 3 ? { opacity: 1, left: '0px', transition: '1s'} : { opacity: 0, left: '-700px', transition: '0s'}}>
              <h2>BARDZO KORZYSTNE OFERTY</h2>
              </div>
              <Link href='/samochody' className='main-button'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Sprawdź ofertę
              </Link>
              </div>
            <Image src={Baner1} alt='baner'/>
          </div>
      </div>
    )
}

export default Baner;