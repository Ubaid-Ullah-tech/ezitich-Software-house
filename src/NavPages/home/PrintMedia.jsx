import React from 'react'
import printmedia from '../../assets/print-media-1.png'
const PrintMedia = () => {
  return (
    <div className='flex mt-32 mb-20'>
      <div className='mt-10 pl-5 text-3xl'>
        <p>PRECISION</p>
      </div>
      <div>
        <img src={printmedia} alt="" />
      </div>
      <div className='mt-5 pr-10 text-3xl'>
        <p>& ELEGANCE IN EVERY PIXEL.</p>
      </div>
    </div>
  )
}

export default PrintMedia
