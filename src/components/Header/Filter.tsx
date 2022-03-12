import { FC } from 'react'

import StarArray from './helpers/StarArray'
import AdultsCount from './helpers/AdultsCount'
import ChildrenCount from './helpers/ChildrenCount'

const Filter: FC = () => {
  return (
    <div className='header__filter'>
      <div className='header__filter-stars'>
        <StarArray />
      </div>
      <div className='header__filter-adults'>
        <AdultsCount />
      </div>
      <div className='header__filter-children'>
        <ChildrenCount />
      </div>
    </div>
  )
}

export default Filter
