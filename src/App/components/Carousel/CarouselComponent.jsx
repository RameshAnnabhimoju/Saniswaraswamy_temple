import Carousel from "react-bootstrap/Carousel";
import godimg from "../../Assets/Images/Carousel_img.png";
import godimg_2 from "../../Assets/Images/Carousel_img-2.png";
import "./CarouselComponent.css";
function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 select-disable"
          src={godimg}
          style={{ height: "500px" }}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 select-disable"
          src={godimg_2}
          style={{ height: "500px" }}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 select-disable"
          src={godimg}
          style={{ height: "500px" }}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
