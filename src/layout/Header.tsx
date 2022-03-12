import { FC } from 'react'
import Banner from '../components/Header/Banner'
import Filter from '../components/Header/Filter'

const Header: FC = () => {
  return (
    <div className='header'>
      <Banner />
      <Filter />
    </div>
  )
}

export default Header
