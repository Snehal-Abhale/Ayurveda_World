import { Outlet } from "react-router";
import Nav from "../nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkVariantExample from "../DarkVariantExample";
import { Container } from 'react-bootstrap';

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
              <p>123 Holistic Street</p>
              <p>Wellness City, AY 56789</p>
            </div>

            <div className="col-md-4">
              <h5>Follow Us:</h5>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
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
