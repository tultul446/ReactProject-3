import  Carousel  from 'react-bootstrap/Carousel';
import React from 'react'

function Hero() {
  return (
    <>
    <Carousel data-bs-theme='dark' indicators={false}>
      <Carousel.Item>
        <div className='text-center'>
            <p className='mt-5' style={{color:'#9A9EA7', fontSize:16, lineHeight:4}}>Meet your new car</p>
            <h1 className='font-weight-bold' style={{fontWeight:700, fontSize:64, color:'#0D0A19', letterSpacing:1}}>Honda Civic Type R</h1>

            <div className='HeroButton mt-3' style={{padding:12, fontWeight:600, fontSize:12}}>

            <button className='btn btn-outline-secondary font-weight-bold me-3 px-4'  style={{ }}>More Details</button>
            <button className='btn btn-primary font-weight-bold px-4 testDrive' style={{background:'#7963F0'}}>Test Drive</button>


            </div>
        </div>
        <div className='HeroImage'>
            <img className='d-block w-100' src="img/Header Image.png" alt="" style={{paddingTop:80}}/>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='text-center'>
            <p className='mt-5' style={{color:'#9A9EA7', fontSize:16, lineHeight:4}}>Join your new car</p>
            <h1 className='font-weight-bold' style={{fontWeight:700, fontSize:64, color:'#0D0A19', letterSpacing:1}}>Ford Civic Type R</h1>

            <div className='HeroButton mt-3' style={{padding:12, fontWeight:600, fontSize:12}}>

            <button className='btn btn-outline-secondary font-weight-bold me-3 px-4'  style={{ }}>More Details</button>
            <button className='btn btn-primary font-weight-bold px-4' style={{background:'#7963F0'}}>Test Drive</button>


            </div>
        </div>
        <div>
            <img className='d-block w-100' src="img/Header Image.png" alt="" style={{paddingTop:80}}/>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='text-center'>
            <p className='mt-5' style={{color:'#9A9EA7', fontSize:16, lineHeight:4}}>Hire for us your new car</p>
            <h1 className='font-weight-bold' style={{fontWeight:700, fontSize:64, color:'#0D0A19', letterSpacing:1}}>TOYOTA CAR is my dream car</h1>

            <div className='HeroButton mt-3' style={{padding:12, fontWeight:600, fontSize:12}}>

            <button className='btn btn-outline-secondary font-weight-bold me-3 px-4'  style={{ }}>More Details</button>
            <button className='btn btn-primary font-weight-bold px-4' style={{background:'#7963F0'}}>Test Drive</button>


            </div>
        </div>
        <div>
            <img className='d-block w-100' src="img/Header Image.png" alt="" style={{paddingTop:80}}/>
        </div>
      </Carousel.Item>
    </Carousel>


  


   
      





    </>
  )
}

export default Hero;


