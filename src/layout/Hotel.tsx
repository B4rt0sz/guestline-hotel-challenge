import { FC, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useSelector } from 'react-redux'
import { Watch } from 'react-loader-spinner'

import { numberOfStar } from '../store/slices/starSlice'
import HotelList from '../components/Hotel/HotelList'

const Hotel: FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false)
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)
  const [hotelList, setHotelList] = useState([])
  const starsNumber = useSelector(numberOfStar)

  useEffect(() => {
    axios
      .get(process.env.HOTELS_API ?? '')
      .then((res: AxiosResponse) => {
        setLoaded(true)
        setHotelList(res.data)
      })
      .catch((error) => setShowErrorMessage(true))
  }, [])

  return (
    <div className='main'>
      {loaded ? (
        hotelList
          .filter((hotel: any) => hotel.starRating >= starsNumber)
          .map((hotel: any) => (
            <HotelList
              key={hotel.id}
              hotelID={hotel.id}
              hotelName={hotel.name}
              hotelAdresses={[hotel.address1, hotel.address2]}
              hotelRating={hotel.starRating}
              hotelImages={hotel.images}
            />
          ))
      ) : (
        <>
          <Watch height='100' width='100' color='#121212' ariaLabel='loading' />
          {showErrorMessage ? <p>Hotel API error</p> : null}
        </>
      )}
    </div>
  )
}

export default Hotel
