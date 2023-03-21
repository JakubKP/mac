import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Loader from "./Loader"

const CarBox = ({ image, name, link }) => {

  const [loading, setLoading] = useState(true)

  return (
    <Link className='car-box' href={`/samochody/${link}`}>
        {loading ? <Loader /> : null}
        <div className='car-name'>{name}</div>
        <Image src={image} alt='car' width={300} height={300} onLoadingComplete={() => setLoading(false)} />
    </Link>
  )
}

export default CarBox
