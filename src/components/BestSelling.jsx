import { Col, Row } from 'react-bootstrap';
const BestSellingItem = [
    {
        Image:"img/logo (2).png",
        name:'Subaru',
        Price:"from $40k"
    },
    {
        Image:"img/logo (3).png",
        name:'Volkswagen',
        Price:"from $15k"
    },
    {
        Image:"img/Bitmap.png",
        name:'Toyota',
        Price:"from $27k"
    },
    {
        Image:"img/logo (4).png",
        name:'Mercedes-Benz',
        Price:"from $60k"
    },
    {
        Image:"img/Bitmap (2).png",
        name:'Hyundai',
        Price:"from $30k"
    },
    {
        Image:"img/logo (5).png",
        name:'Infiniti',
        Price:"from $54k"
    },
];


export const BestSelling = () => {
    return (
        <>
         <div className="container" style={{paddingTop:'86px'}}>
           <h1 className="text-center fw-bold mb-5">Explore best selling car makes</h1>
            
            <Row className='d-flex justify-content-center' style={{paddingTop:30}}>
                {BestSellingItem.map(
                    ({Image, name, Price }, index) => (
                 
                 <Col md={4} key={index} className='d-flex  SellingCard '>
                 <div className='vw-add'>
                  <img src={ Image } alt='' className='vw-logo p-4 w-[100px]'/>
                  </div>
         <div className='p-2'>
            <div className='fw-bold vw-text textItem'>{ name } </div>
          <div className='vw-price priceItem'>{ Price } </div>
        </div>

                

                 </Col>
                ))}
            </Row>

         </div>

        </>
    )
};
