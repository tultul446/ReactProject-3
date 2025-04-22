import { Button, Card, Col, Row } from 'react-bootstrap'

const Trend = [
    {
      img:'./img/img1.png',
      title:'Used 2019 Audi S4 Premium Plus',
      miles:'11 475 Miles',
      transmission:'AWD',
      cylinder:'4-Cylinder Turbo',
      price:'$41,400'
      
    },
    {
      img:'./img/Img2.png',
      title:'2013 Subaru Forester Premium Plus',
      miles:'40 475 Miles',
      transmission:'AWD',
      cylinder:'4-Cylinder Turbo',
      price:'$22,500'
     
    },
    {
      img:'/img/Img3.png',
      title:'Used 2010 BMW X3 Sport package',
      miles:'20 850 Miles',
      transmission:'RWD',
      cylinder:'4-Cylinder',
      price:'$39,200'
    
    }


];

export const Trending = () => {
    return(
        <>
        <div className="container ">
        <h1 className="text-center fw-bold HeadingMargin">Trending near you</h1>
        <Row className='d-flex justify-content-center'>
        
        {Trend.map(
        ({img, title, miles, transmission, cylinder, price, }) => (
        <Col style={{width:'25rem', border:'none' }}>
         <Card.Img variant='top' src={ img }/>
         <Card.Body>     
 <Card.Title>{title}</Card.Title>
<Card.Text className='opacity-500 CardText'>{ miles }</Card.Text>
<Card.Text className='opacity-500 CardText'> {cylinder  } . { transmission }</Card.Text>


     <div className='d-flex flex-row gap-3 '>
    <Button variant='primary' className='fw-bold PriceBtn'>{ price }</Button>
    <Button variant='secondary' className='fw-bold BastSeller'> Bestseller </Button>
     </div>


           </Card.Body>
       

        </Col>



        )
        
        )
        
        }

        </Row>
        </div>
        </>
    )
}
