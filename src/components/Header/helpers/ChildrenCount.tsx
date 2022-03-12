import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addChild,
  decreaseChild,
  numberOfChildren,
} from '../../../store/slices/childrenSlice'

const AdultsCount: FC = () => {
  const dispatch = useDispatch()
  const childrenNumber = useSelector(numberOfChildren)

  return (
    <>
      <h3>Children:</h3>
      <button
        onClick={(): void => {
          dispatch(addChild(1))
        }}
      >
        +
      </button>
      <p>{childrenNumber}</p>
      <button
        onClick={(): void => {
          dispatch(decreaseChild(1))
        }}
      >
        -
      </button>
    </>
  )
}
export default AdultsCount
