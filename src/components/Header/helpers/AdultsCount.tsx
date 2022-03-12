import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addAdult,
  decreaseAdult,
  numberOfAdults,
} from '../../../store/slices/adultsSlice'

const AdultsCount: FC = () => {
  const dispatch = useDispatch()
  const adultsNumber = useSelector(numberOfAdults)

  return (
    <>
      <h3>Adults:</h3>
      <button
        onClick={(): void => {
          dispatch(addAdult(1))
        }}
      >
        +
      </button>
      <p>{adultsNumber}</p>
      <button
        onClick={(): void => {
          dispatch(decreaseAdult(1))
        }}
      >
        -
      </button>
    </>
  )
}
export default AdultsCount
