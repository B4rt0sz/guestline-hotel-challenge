import { FC } from 'react'
import { Watch } from 'react-loader-spinner'
import { useSelector } from 'react-redux'

import useRequest from '../../hooks/useRequest'
import { numberOfAdults } from '../../store/slices/adultsSlice'
import { numberOfChildren } from '../../store/slices/childrenSlice'
import StarRating from './helpers/StarRating'
import HotelDescription from './helpers/HotelDescription'
import RoomList from './helpers/RoomList'

type HotelDetails = {
  hotelID: string
  hotelName: string
  hotelAdresses: string[]
  hotelRating: string
  hotelImages: {
    url: string
  }[]
}

const HotelList: FC<HotelDetails> = ({
  hotelID,
  hotelName,
  hotelAdresses,
  hotelRating,
  hotelImages,
}) => {
  const { data, error } = useRequest(`${process.env.ROOMS_API}${hotelID}` ?? '')
  const adultGuest = useSelector(numberOfAdults)
  const childGuest = useSelector(numberOfChildren)

  const aveliableRooms = data?.rooms.filter(
    (guest: any) =>
      guest.occupancy.maxAdults >= adultGuest &&
      guest.occupancy.maxChildren >= childGuest
  )

  const showRooms =
    aveliableRooms?.length > 0 ? (
      aveliableRooms.map((room: any) => (
        <RoomList
          key={room.id}
          name={room.name}
          occupancy={room.occupancy}
          longDescription={room.longDescription}
        />
      ))
    ) : (
      <p className='noRooms'>
        We can't meet your requirements. Please change the number of guests.
      </p>
    )

  return (
    <div className='hotel'>
      <div className='hotel__description'>
        <HotelDescription
          hotelImages={hotelImages}
          hotelName={hotelName}
          hotelAdresses={hotelAdresses}
        />
      </div>
      <div className='hotel__rating'>
        <StarRating rating={hotelRating} />
      </div>
      <div className='hotel__roomsList'>
        {data ? (
          showRooms
        ) : (
          <>
            <Watch height='50' width='50' color='#121212' ariaLabel='loading' />
            {error ? (
              <p className='errorMessage'>
                Couldn't fetch rooms data. Please contact us if you see this
                message.
              </p>
            ) : null}
          </>
        )}
      </div>
    </div>
  )
}

export default HotelList
