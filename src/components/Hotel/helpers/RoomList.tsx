import { FC } from 'react'

type RoomDetails = {
  name: string
  occupancy: {
    maxAdults: number
    maxChildren: number
  }
  longDescription: string
}

const RoomList: FC<RoomDetails> = ({ name, occupancy, longDescription }) => {
  return (
    <div className='room'>
      <div className='room__details'>
        <h3>{name}</h3>
        <p>Adults: {occupancy.maxAdults}</p>
        <p>Children: {occupancy.maxChildren}</p>
      </div>
      <div className='room__description'>
        <p>{longDescription}</p>
      </div>
    </div>
  )
}

export default RoomList
