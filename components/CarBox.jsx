import Image from "next/image"
import Link from "next/link"

const CarBox = ({ image, name, link }) => {

  return (
    <Link className='car-box' href={`/samochody/${link}`}>
        <div className='car-name'>{name}</div>
        <Image src={image} alt='car' width={300} height={300}/>
    </Link>
  )
}

export default CarBox
