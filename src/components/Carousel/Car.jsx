import Carousel from 'react-bootstrap/Carousel';
import godimg from '../Images/godpiccut.jpg'

function Car() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={godimg}
          style={{height: "600px"}}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={godimg}  
          style={{height: "600px"}}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={godimg}
          style={{height: "600px"}}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Car;