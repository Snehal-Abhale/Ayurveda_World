import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';

const ProductListingPage = () => {
  const [products, setProducts] = useState({ Immunity: [] });

  useEffect(() => {
    fetch('/productCategories')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  console.log(products);

  return (
    <Container>
      <h1 className="mt-5">Immunity Boosters</h1>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4 mt-3">
        {products.Immunity.map(product => (
          <Col key={product.id}>
            <Card className="h-100" style={{ cursor: 'pointer' }}>
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                className="responsive-image"
                style={{ objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Vendor: {product.vendor}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductListingPage;
