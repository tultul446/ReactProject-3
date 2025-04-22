import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='navbar navbar-expand-lg'>
      <div className='container'>
  <a href="">
    <img src="img/Logo.png" alt="" />
  </a>
  <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarToggler'>
    <span className='navbar-toggler-icon'></span>
     </button>

 <div className='collapse navbar-collapse' id='navbarToggler'>
    <ul className='navbar-nav ms-auto gap-3 '>


      <li className='nav-item'><a href="" className='nav-link'  style={{color:'#0D0A19', fontSize:16, fontWeight:700,}}>Used Cars</a> </li>

      <li className='nav-item'><a href="" className='nav-link'  style={{color:'#0D0A19', fontSize:16, fontWeight:700,}}>Auctions</a> </li>

      <li className='nav-item'><a href="" className='nav-link'  style={{color:'#0D0A19', fontSize:16, fontWeight:700,}}>New Cars</a> </li>

      <li className='nav-item'><a href="" className='nav-link'  style={{color:'#0D0A19', fontSize:16, fontWeight:700,}}>Sell Cars</a> </li>

      <li className='nav-item'><a href="" className='nav-link'  style={{color:'#0D0A19', fontSize:16, fontWeight:700,}}>Local Dealers</a> </li>

      <li className='nav-item'><a href="" className='nav-link'  style={{color:'#0D0A19', fontSize:16, fontWeight:700,}}>Support</a> </li>

      <li className='nav-item navbarButton'><a href="" className='nav-link'><i className="bi bi-person-fill" style={{backgroundColor:'#9A9EA7', padding:5, borderRadius:7}}></i> <span style={{fontSize:14, fontWeight:500, marginLeft:10}}>Sign Up</span></a> </li>


    </ul>


 </div>


      </div>
    </nav>
      
    </>
  )
}

export default Navbar
