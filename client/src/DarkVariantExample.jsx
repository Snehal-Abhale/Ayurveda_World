import Carousel from 'react-bootstrap/Carousel';
import { NavLink, Link } from "react-router-dom";

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" interval="2000">
      <Carousel.Item>
        <NavLink to="/productCategories/Immunity">
          <div
            className="d-flex align-items-start justify-content-end "
            style={{
              backgroundImage: `url('https://cdn.pixabay.com/photo/2023/10/20/07/12/ai-generated-8328480_1280.png')`,
              backgroundSize: 'cover',
              color: 'white',
              height: '800px',
            }}
          >

            <div className="w-75 h-100 d-flex flex-column align-items-left justify-content-left text-light position-absolute top-0 end-0 p-6">

              <p style={{ fontSize: '2.5em', fontWeight: 'bold' }}>Get 50% Off on Immunity Products!</p>
               
                
            </div>
          </div>
        </NavLink>
      </Carousel.Item>

      <Carousel.Item>
        <NavLink to="/productCategories/Skin Care">
          <div
            className="d-flex align-items-start justify-content-end"
            style={{
              backgroundImage: `url('https://digiqure.com/blog/wp-content/uploads/2021/08/point2.jpg')`,
              backgroundSize: 'cover',
              color: 'white',
              height: '800px',
            }}
          >

          
          </div>
        </NavLink>
      </Carousel.Item>
      <Carousel.Item>
        <NavLink to="/productCategories/Hair Health">
          <div
            className="d-flex align-items-start justify-content-end"
            style={{
              backgroundImage: `url('https://i1.wp.com/kezaliherbals.com/wp-content/uploads/2021/06/Fall-Season-Blog-Banner-6.png?fit=1120%2C630&ssl=1')`,
              backgroundSize: 'cover',
              color: 'white',
              height: '800px',
            }}
          >
          </div>
        </NavLink>
      </Carousel.Item>
    
    </Carousel>
  );
}

export default DarkVariantExample;