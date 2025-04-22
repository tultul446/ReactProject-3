import { Row, Col } from "react-bootstrap";
const ReviewsItem = [

    {
        Image:'img/Img6.png' ,
        title:'2021 Cadillac Escalade',
        content:'The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.',
        user:{
            img:'img/Oval.png',
            name:'Hironaka Hiroe',
            position:'Chief Editor',
            rating:'4.91',
            total:'(98)'
        },
    
    },
    

{
    Image:'img/Img7.png' ,
    title:'2021 Hyundai Elantra',
    content:'If developing a car was a marathon technological showcase, Hyundai didn’t run the last mile with the 2021 Elantra. ',
    user:{
        img:'img/Oval Copy.png',
        name:'Debashis Bhuiyan',
        position:'News Editor',
        rating:'4.65',
        total:'(93)'
    },

},

{
    Image:'img/Img8.png ' ,
    title:`2021 Mercedes-Benz GLA250
`,
    content:'The new entry point into Mercedes-Benz’s SUV lineup is bigger and improved, but still features a frustrating powertrain. ',
    user:{
        img:'img/Oval Copy 2.png',
        name:'Lew Silverton',
        position:'Chief Editor',
        rating:'4.55',
        total:'(35)'
    },

},


];

const Reviews = () => {
  return (
    <div className=" container">
         <h1 className="text-center fw-bold mb-5">Recent reviews</h1>


{/* Card section */}
<Row>

{ReviewsItem.map((review, i) => (
    <Col key={i} md={4} className="mb-4">

<div className="card border-0 review-card " >
<img src={review.Image} alt="" className="shadow-sm"/>


<div className="card-body">
   <h3 className="card-title text-bold">{review.title}</h3>
   <p className="card-text opacity-50">{review.content}</p>
</div>

    <div>
  
     
        <div className="d-flex align-items-center me-1 mt-2">
         <img src={review.user.img} alt="" className="me-2 rounded-circle" />
       
       <div className="flex-grow-1">
           <h6 className="fw-bold mb-0">{review.user.name}</h6>
           <small className="text-muted">{review.user.position}</small>
       </div>
        <div className="text-end ms-2 align-items-center mb-3">
           <span><i className="bi bi-star-fill text-warning me-1"></i></span>
           <span>{review.user.rating}</span>
           <span>{review.user.total}</span>
        </div>
        </div>
   </div>



  </div>



  



</Col>
))
}

</Row>



       

    </div>
  )
}

export default Reviews;
