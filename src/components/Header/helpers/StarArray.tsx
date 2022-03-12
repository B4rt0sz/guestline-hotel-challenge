import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { filterStar, numberOfStar } from '../../../store/slices/starSlice'

const StarArray: FC = () => {
  const dispatch = useDispatch()
  const starsNumber = useSelector(numberOfStar)

  return (
    <>
      {[...Array(5)].map((value: undefined, index: number) => {
        index += 1
        return index > starsNumber ? (
          <AiOutlineStar
            key={index}
            onClick={(): void => {
              dispatch(filterStar(index))
            }}
          />
        ) : (
          <AiFillStar
            key={index}
            onClick={(): void => {
              dispatch(filterStar(index))
            }}
          />
        )
      })}
    </>
  )
}
export default StarArray
