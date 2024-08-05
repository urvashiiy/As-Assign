import React from 'react'
import diy from '../assets/diy.jpg'

const Home = () => {
  return (
    <div>
      <div className='Home-main'>
      
        <div className='img-cont'>
          <img style={{objectFit:'contain', width:'50%', height:'20%'}} src={diy} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home