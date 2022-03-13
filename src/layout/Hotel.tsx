import { FC, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useSelector } from 'react-redux'
import { Watch } from 'react-loader-spinner'

import { numberOfStar } from '../store/slices/starSlice'
import HotelList from '../components/Hotel/HotelList'

const Hotel: FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false)
  const [hotelList, setHotelList] = useState([])
  const starsNumber = useSelector(numberOfStar)

  useEffect(() => {
    axios.get(process.env.HOTELS_API ?? '').then((res: AxiosResponse) => {
      setLoaded(true)
      setHotelList(res.data)
    })
  }, [])

  return (
    <div className='main'>
      {loaded ? (
        hotelList
          .filter((hotel: any) => hotel.starRating >= starsNumber)
          .map((hotel: any) => (
            <HotelList
              key={hotel.id}
              id={hotel.id}
              name={hotel.name}
              address1={hotel.address1}
              address2={hotel.address2}
              starRating={hotel.starRating}
              images={hotel.images}
            />
          ))
      ) : (
        <Watch height='100' width='100' color='#121212' ariaLabel='loading' />
      )}
    </div>
  )
}

export default Hotel
