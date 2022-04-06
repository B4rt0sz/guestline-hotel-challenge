import { FC } from 'react'

import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

type Rating = {
  rating: string
}

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
