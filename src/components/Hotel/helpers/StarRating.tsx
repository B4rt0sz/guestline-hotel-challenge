import { FC } from 'react'

import { Rating } from '../../../types/types'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

const StarArray: FC<Rating> = ({ rating }) => {
  const hotelRating = Number(rating)

  return (
    <>
      {[...Array(5)].map((value: undefined, index: number) => {
        index += 1
        return index > hotelRating ? (
          <AiOutlineStar key={index} />
        ) : (
          <AiFillStar key={index} />
        )
      })}
    </>
  )
}
export default StarArray
