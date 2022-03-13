import { FC } from 'react'
import Header from './layout/Header'
import Hotel from './layout/Hotel'

const App: FC = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Hotel />
    </div>
  )
}

export default App
