import React, { useState, useEffect } from "react";
import {useLoaderData,useNavigate} from "react-router-dom";
import { Card, Col, Container, Row, Button } from 'react-bootstrap';

const ProductListingPage = () => {

    const loaderData = useLoaderData();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
       
        if (loaderData && loaderData.allProductCategoriesData) {
            const data = loaderData.allProductCategoriesData[loaderData.category];
            if (Array.isArray(data)) {
                setProducts(data);
                setLoading(false);
            } else {
                console.error("Data is not an array:", data);
            }
        }
    }, [loaderData]);

    const handleCardClick = (productId, productCategory) => {
      // Navigate to the product details page with the product ID
      navigate(`/productDetails/${productCategory}/${productId}`);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <h1 className="mt-5">{loaderData.category}</h1>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4 mt-3">
                {products.map(product => (
                    <Col key={product.id}>
                        <Card className="h-100" style={{ cursor: 'pointer' }}>
                            <Card.Img onClick={() => handleCardClick(product.id, loaderData.category)}
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
