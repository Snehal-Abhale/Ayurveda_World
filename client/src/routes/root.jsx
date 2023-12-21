import { Outlet } from "react-router";
import Nav from "../nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkVariantExample from "../DarkVariantExample";
import { Container , Row, Col} from 'react-bootstrap';

export default function Root() {
  return (
    <div className="bg-gray-100 min-vh-100 d-flex flex-column">
      <header>
        <Nav />
      </header>

      {/* Nested routes will render right here. */}
      <main className="p-4 flex-grow-1">
        <Outlet />
        {/* <DarkVariantExample/> */}
      </main>

      {/* This <footer> will render below every route. */}
      <footer className="py-4 text-center bg-dark text-white">
      <div className="container">
        <Row>
          <Col md={4}>
            <div>
              <img src="https://img.forestessentialsindia.com/pub/media/cms_images/100-Ayurvedic.png" alt="Image 1" style={{ width: '30%', marginBottom: '10px' }} />
              <h4>100% Ayurvedic</h4>
              <p>
                Our products are certified 100% natural and inspired by Ayurveda recipes by the ministry of AYUSH. We conform to the highest quality control standards.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <img src="https://img.forestessentialsindia.com/pub/media/cms_images/Plant-Based.png" alt="Image 2" style={{ width: '30%', marginBottom: '10px' }} />
              <h4>Plant Based</h4>
              <p>
                We harness the power of plant extracts as a part of our commitment to using naturally effective and sustainably sourced ingredients to achieve superior results organically.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <img src="https://img.forestessentialsindia.com/pub/media/cms_images/free-shipping.png" alt="Image 3" style={{ width: '30%', marginBottom: '10px' }} />
              <h4>Free Shipping</h4>
              <p>
                Free Shipping on all international orders above $ 1000 & on all domestic orders above $50. Cash on Delivery payment option available on all domestic orders above $1000
              </p>
            </div>
          </Col>
        </Row>
        <hr /> 
      </div>
      
        <Container className="padding-top: 60px">

          <div className="row">
            <div className="col-md-4">
              <h5>Contact Us:</h5>
              <p>Email: support@ayurvedicworld.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>

            <div className="col-md-4">
              <h5>Visit Us:</h5>
              <p>Ayurvedic World Headquarters</p>
              <p>123 Broadway</p>
              <p>New York City, NY 56789</p>
            </div>

            <div className="col-md-4">
              <h5>Follow Us:</h5>
              <p>
                <a href="https://www.facebook.com/snehal.abhale.1/" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </p>
              <p>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </p>
            </div>
          </div>

          <hr />

          {/* Add other sections similarly */}

          <p>Ayurvedic World - Your Partner in Wellness</p>
          <p>At Ayurvedic World, we are committed to providing you with the highest quality Ayurvedic products and fostering a community dedicated to holistic living. Join us on this journey towards well-being!</p>

          <p>🌿✨ Thank you for choosing Ayurvedic World! ✨🌿</p>
        </Container>
      </footer>
    </div>
  );
}
