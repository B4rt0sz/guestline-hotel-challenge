import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Watch } from 'react-loader-spinner'

import useRequest from '../hooks/useRequest'
import { numberOfStar } from '../store/slices/starSlice'
import HotelList from '../components/Hotel/HotelList'

const Hotel: FC = () => {
  const { data, error } = useRequest(process.env.HOTELS_API ?? '')
  const starsNumber = useSelector(numberOfStar)

  return (
    <div className='main'>
      {data ? (
        data
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
          {error ? (
            <p className='errorMessage'>
              Couldn't fetch hotels data. Please contact us if you see this
              message.
            </p>
          ) : null}
        </>
      )}
    </div>
  )
}

export default Hotel
