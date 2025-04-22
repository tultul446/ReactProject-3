import React from 'react'

const Footer = () => {
  return (
    <footer className='container footer-container d-flex align-items-center mb-4'>
      <p>
        <span className='fw-bold'>Privacy Policy</span>
        <span className='fw-bold ps-4'>Term of Use</span>
        <span className='ps-4 opacity-80'>© 2021 All rights reserved</span>
      </p>

    <div className='d-flex gap-3 ' style={{color:'#9A9EA7'}} >

    <p className='d-flex gap-1 mb-4'>
        <i className="bi bi-globe-central-south-asia fw-bold "></i>
       <span className='fw-bold  '>English</span>
       </p>
       <p className='d-flex gap-1 '>
       <i class="bi bi-three-dots fw-bold"></i>
       <span className='fw-bold '>USD</span>
       </p>
    </div>
    </footer>
  )
}

export default Footer
