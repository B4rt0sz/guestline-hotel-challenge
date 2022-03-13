import { FC } from 'react'

import { RoomDetails } from '../../../types/types'

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
