import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-20"
          src="https://t3.ftcdn.net/jpg/02/45/77/62/360_F_245776292_KjTmy7E9bYhpZxfikW1YLbZrG2EPoRay.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src="https://t3.ftcdn.net/jpg/02/45/77/62/360_F_245776292_KjTmy7E9bYhpZxfikW1YLbZrG2EPoRay.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src="https://t3.ftcdn.net/jpg/02/45/77/62/360_F_245776292_KjTmy7E9bYhpZxfikW1YLbZrG2EPoRay.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;