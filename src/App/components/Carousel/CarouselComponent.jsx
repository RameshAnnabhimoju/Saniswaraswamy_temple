import Carousel from "react-bootstrap/Carousel";
import godimg from "../../Assets/Images/godpiccut.jpg";
import "./CarouselComponent.css";
function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 select-disable"
          src={godimg}
          style={{ height: "600px" }}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 select-disable"
          src={godimg}
          style={{ height: "600px" }}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 select-disable"
          src={godimg}
          style={{ height: "600px" }}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
