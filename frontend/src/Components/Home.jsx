import React from 'react'

const Home = () => {
  return (
    <div className='Home-main'>
      <div className='home-cont'>
        <h1 style={{ textAlign: 'center', color: '#ffff', font: 'revert-layer' }}>Home</h1>
        <svg height={210} width={400}>
          <polygon
            points="20010 250,190 16060 240.60 150,190"
            style={{ fill: "#F7F9F2", stroke: "purple", strokeWidth: 2 }}
          />
        </svg>
        <svg height={210} width={400}>
          <polygon
            points="100,8 50.19 16060 240.60 150,190"
            style={{ fill: "#F7F9F2", stroke: "purple", strokeWidth: 2 }}
          />
        </svg>
        <svg height={210} width={400}>
          <polygon
            points="-00.00 -100,150 130.30 240.60 -100,190 "
            style={{ fill: "#F7F9F2", stroke: "purple", strokeWidth: 2 }}
          />
        </svg>
        <svg width={100} height={100}>
          <circle cx={10} cy={10} r={60} stroke="black" strokeWidth={3} fill="red" />
        </svg>
        <svg width={200} height={200}>
          <circle cx={5} cy={50} r={100} stroke="black" strokeWidth={3} fill="red" />
        </svg>


      </div>

    </div>
  )
}

export default Home