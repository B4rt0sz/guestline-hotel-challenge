import { FC } from 'react'

import { HotelDetails } from '../../types/types'
import StarRating from './helpers/StarRating'
import HotelDescription from './helpers/HotelDescription'

const HotelList: FC<HotelDetails> = ({
  id,
  name,
  address1,
  address2,
  starRating,
  images,
}) => {
  const hotelID = id
  const hotelImages = images
  const hotelName = name
  const hotelAdresses = [address1, address2]
  const rating = starRating

  return (
    <div className='main__hotel'>
      <div className='main__hotel-description'>
        <HotelDescription
          hotelImages={hotelImages}
          hotelName={hotelName}
          hotelAdresses={hotelAdresses}
        />
      </div>
      <div className='main__hotel-rating'>
        <StarRating rating={rating} />
      </div>
    </div>
  )
}

export default HotelList
