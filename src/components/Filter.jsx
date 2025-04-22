const Type = ()=> (
    <div className="d-flex justify-content-center align-items-center">
   <label> 
    <span className="fw-normal text-start filter-search-label">Type</span>
     <select className="form-select filter-search-select fw-bold fs-6 ">
        <option className="fw-bold fs-6 ">Used Card </option>
        <option className="fw-bold fs-6 ">New Car </option>
        <option className="fw-bold fs-6 ">Vangari car </option>
     </select>
   </label>

    <div className="vertical-line">

    </div>
  </div>
)


const Make = () => (
    <div className="d-flex justify-content-center align-items-center">
    <label> 
     <span className="fw-normal text-start filter-search-label">Make</span>
      <select className="form-select filter-search-select fw-bold fs-6 ">
         <option className="fw-bold fs-6 ">Infiniti</option>
         <option className="fw-bold fs-6 ">New Car </option>
         <option className="fw-bold fs-6 ">Vangari car </option>
      </select>
    </label>
 
     <div className="vertical-line">
 
     </div>
   </div> 

)

const Year = () => (
    <div className="d-flex justify-content-center align-items-center ">
 <label>
    <span className="fw-normal fs-7 text text-start filter-search-label">Year</span>
    <select className="form-select outline-none fw-bold fs-6 filter-search-select ">

       <option value='' className="fw-bold fs-6">
         2000
        </option> 
       <option value='' className="fw-bold fs-6">
         2015
        </option> 
       <option value='' className="fw-bold fs-6">
         2016
        </option> 
       <option value='' className="fw-bold fs-6">
         2024
        </option> 
       
    </select>
 </label>
 <div className="vertical-line"></div>
</div>
)


const Modal = () => (
    <div className="d-flex justify-content-center align-items-center ">
    <label>
       <span className="fw-normal fs-7 text text-start filter-search-label">Modal</span>
       <select className="form-select outline-none fw-bold fs-6 filter-search-select ">
   
          <option value='' className="fw-bold fs-6">
          SUVs
           </option> 
          <option value='' className="fw-bold fs-6">
          X2 Coupe SUV
           </option> 
          <option value='' className="fw-bold fs-6">
          X3 SUV
           </option> 
          <option value='' className="fw-bold fs-6">
          X4 Coupe SUV
           </option> 
          
       </select>
    </label>
    <div className="vertical-line"></div>
   </div>
)

const Price = () => (
   
    <div className="d-flex justify-content-center align-items-center ">
    <label>
       <span className="fw-normal fs-7 text text-start filter-search-label">Price</span>
       <select className="form-select outline-none fw-bold fs-6 filter-search-select ">
   
          <option value='' className="fw-bold fs-6">
        1000
           </option> 
          <option value='' className="fw-bold fs-6">
          15000
           </option> 
          <option value='' className="fw-bold fs-6">
          18000
           </option> 
          <option value='' className="fw-bold fs-6">
      20000
           </option> 
          
       </select>
    </label>
    <div className="vertical-line"></div>
   </div>

)

export const FilterAndSearch = () => {
    return(
       <>
       <section>
      <h1 className="text-center fw-bold fs-2 p-3 " style={{lineHeight:3, }}>Which vehicles you are looking for? </h1>


     <div className="d-flex justify-content-center align-items-center filter-search-box  ms-3">


      <Type/>
      <Make/>
      <Year/>
      <Modal/>
      <Price/>

      <button className="btn btn-primary search-button"><i className="bi bi-search"></i> Search</button>
     </div>





       </section>
  </> 
    )
}

 

