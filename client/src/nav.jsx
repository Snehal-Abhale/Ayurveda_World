// import { NavLink } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';


// export default function Nav()
// {
//   return(
//     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//   <div class="container-fluid">

//     <NavLink to="/" className="navbar-brand" activeClassName="font-semibold"> <img src ="https://www.pngitem.com/pimgs/m/333-3335333_get-ayurveda-ayurvedic-cover-hd-png-download.png"  style={{ width: '100px', height: '50px' }}/> </NavLink>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul class="navbar-nav">

//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Product Categories
//           </a>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Oil</a></li>
//             <li><a class="dropdown-item" href="#">Tablets</a></li>
//             <li><a class="dropdown-item" href="#">Tinctures</a></li>
//             <li><a class="dropdown-item" href="#">Meal Ingredients</a></li>
//           </ul>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//            Training and Education
//           </a>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Webinars</a></li>
//             <li><a class="dropdown-item" href="#">Books</a></li>
//             <li><a class="dropdown-item" href="#">CDs and DVDs</a></li>

//           </ul>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

//   );
// }

import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        <img
          src="https://www.pngitem.com/pimgs/m/333-3335333_get-ayurveda-ayurvedic-cover-hd-png-download.png"
          alt="Logo"
          style={{ width: '100px', height: '50px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavDropdown" />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className="mx-auto"> {/* Center-align the dropdown menus */}
          <NavDropdown title="Product Categories" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/productCategories/Immunity">Immunity</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/productCategories/Mens Health">Men's Health</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/productCategories/Womens Health">Women's Health</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/productCategories/Heart">Heart</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/productCategories/Digestive">Digestive</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/productCategories/Joint and Bones">Joint and Bones</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/productCategories/Hair Health">Hair Health</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/productCategories/Skin Care">Skin Care</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/productCategories/Lungs and Sinus">Lungs and Sinus</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Training and Education" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/productCategories/Webinars">Webinars</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/productCategories/Books">Books</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/productCategories/CDs and DVDs">CDs and DVDs</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="ml-auto">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            
          </Form>
          <Nav.Link href="/loginform">
            <FontAwesomeIcon icon={faUser} /> {/* User icon */}
          </Nav.Link>
          <Nav.Link href="#cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} /> {/* Cart icon */}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
