import { FC } from 'react'

const imgUrl = 'https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/Hotel1.JPG'

const Banner: FC = () => {
  return <img className='header__banner' src={imgUrl} alt='hotel_header' />
}

export default Banner
