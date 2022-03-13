import { FC } from 'react'
import SimpleImageSlider from 'react-simple-image-slider'

import { Info } from '../../../types/types'

const HotelDescription: FC<Info> = ({
  hotelImages,
  hotelName,
  hotelAdresses,
}) => {
  return (
    <>
      <SimpleImageSlider
        width={180}
        height={130}
        images={hotelImages}
        showBullets={false}
        showNavs={true}
        navSize={30}
        navStyle={2}
        navMargin={0}
        useGPURender={true}
      />
      <div className='hotel__description-info'>
        <h3>{hotelName}</h3>
        <p>{hotelAdresses[0]}</p>
        {hotelAdresses[1] && <p>{hotelAdresses[1]}</p>}
      </div>
    </>
  )
}
export default HotelDescription
