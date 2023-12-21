
import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Card, Col, Container, Row, Pagination,Form } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const ProductListingPage = () => {
  const loaderData = useLoaderData();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4); // Number of products per page
 

  useEffect(() => {
    if (loaderData && loaderData.allProductCategoriesData) {
      const data = loaderData.allProductCategoriesData[loaderData.category];
    //   const filter = loaderData.search;
    //   console.log("search:", filter)
      if (Array.isArray(data)) {
        setProducts(data);
        setLoading(false);
      } else {
        console.error("Data is not an array:", data);
      }
    }
  }, [loaderData]);

  const handleCardClick = (productId, productCategory) => {
    navigate(`/productDetails/${productCategory}/${productId}`);
  };

  const formatReviews = (numReviews) => {
    if (numReviews > 999) {
      return `${(numReviews / 1000).toFixed(1)} k`;
    }
    return numReviews;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = () => {
    // Fetch products based on the searchQuery from your backend
    // Update the products state with the search results
    // You need to implement the backend API endpoint for searching
  };

  return (
    <Container>
      <h1 className="mt-5">{loaderData.category}</h1>
     
      <Row xs={1} md={2} lg={3} xl={4} className="g-4 mt-3">
        {currentProducts.map((product) => (
          <Col key={product.id}>
            <Card
              className="h-100 responsive-image bg-light"
              style={{ cursor: 'pointer', border: "none", boxShadow: "none", position: "relative" }}
              onClick={() => handleCardClick(product.id, loaderData.category)}
            >
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                className="responsive-image"
                style={{ objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Brand: {product.brand}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
              </Card.Body>
              {/* Ratings and Reviews */}
              <div
                className="position-absolute top-0 start-0 p-2  text-dark"
                style={{ borderRadius: "0.25rem" }}
              >
                <span className="ms-1">{product.rating}<FaStar className="text-warning" /></span>
                <small className="ms-1"> | {formatReviews(product.num_reviews)}</small>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      {/* Pagination */}
      <div className="d-flex justify-content-center mt-3">
        <Pagination>
          {[...Array(Math.ceil(products.length / productsPerPage))].map((_, index) => (
            <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </Container>
  );
};

export default ProductListingPage;
