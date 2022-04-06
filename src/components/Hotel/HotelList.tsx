import { FC, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Watch } from 'react-loader-spinner'
import { useSelector } from 'react-redux'

import StarRating from './helpers/StarRating'
import HotelDescription from './helpers/HotelDescription'
import RoomList from './helpers/RoomList'
import { numberOfAdults } from '../../store/slices/adultsSlice'
import { numberOfChildren } from '../../store/slices/childrenSlice'

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
  const [loaded, setLoaded] = useState<boolean>(false)
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)
  const [roomList, setRoomList] = useState([])
  const adultGuest = useSelector(numberOfAdults)
  const childGuest = useSelector(numberOfChildren)

  const aveliableRooms = roomList.filter(
    (guest: any) =>
      guest.occupancy.maxAdults >= adultGuest &&
      guest.occupancy.maxChildren >= childGuest
  )

  useEffect(() => {
    axios
      .get(`${process.env.ROOMS_API}${hotelID}` ?? '')
      .then((res: AxiosResponse) => {
        setLoaded(true)
        setRoomList(res.data.rooms)
      })
      .catch((error) => setShowErrorMessage(true))
  }, [])

  const showRooms =
    aveliableRooms.length > 0 ? (
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
        {loaded ? (
          showRooms
        ) : (
          <>
            <Watch height='50' width='50' color='#121212' ariaLabel='loading' />
            {showErrorMessage ? <p>Rooms API error</p> : null}
          </>
        )}
      </div>
    </div>
  )
}

export default HotelList
