import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import Loader from "./Loader"

const CarInfo = ({ name, hp, max, top, drive, engine, gearBox, image1, image2, image3, image4, image5}) => {

    const [loading, setLoading] = useState(true)

    const router = useRouter()

    return (
        <>
            {loading ? <Loader /> : null}
            <Image src={image1.src} alt='car' width={2000} height={2000} onLoadingComplete={() => setLoading(false)} />
            <div className='text-container-car'>
                <div className='car-info'>
                    <div>MOC</div>
                    <div>{hp} KM</div>
                </div>
                <div className='car-info'>
                    <div>0-100</div>
                    <div>{top} s</div>
                </div>
                <div className='car-info'>
                    <div>V-MAX</div>
                    <div>{max} km/h</div>
                </div>
                <div className='car-info'>
                    <div>SILNIK</div>
                    <div>{engine}</div>
                </div>
                <div className='car-info'>
                    <div>NAPĘD</div>
                    <div>{drive}</div>
                </div>
                <div className='car-info'>
                    <div>SKRZYNIA</div>
                    <div>{gearBox}</div>
                </div>
            </div>
        </>
)}
    
export default CarInfo;