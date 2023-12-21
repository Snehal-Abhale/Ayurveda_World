import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    url: '',
    availability: '',
    rating: 0,
    num_reviews: 0,
    brand: '',
    vendor: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request with formData
    fetch('/insert_product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product inserted successfully:', data);
        // Handle success, e.g., redirect to another page or update state
      })
      .catch((error) => {
        console.error('Error inserting product:', error);
        // Handle error, e.g., show an error message to the user
      });

      setFormData({
        name: '',
        price: '',
        description: '',
        image: '',
        url: '',
        availability: '',
        rating: 0,
        num_reviews: 0,
        brand: '',
        vendor: '',
        category: '',
      })
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="productName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="productPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productDescription">
        <Form.Label>Product Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productImageurl">
        <Form.Label>Product Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product Image URL"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productRating">
        <Form.Label>Product Ratings</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter product Rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="productReviews">
        <Form.Label>Product Reviews</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter product Reviews"
          name="num_reviews"
          value={formData.num_reviews}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productBrand">
        <Form.Label>Product Brand</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product Brand"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productVendor">
        <Form.Label>Product Vendor</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product Vendor"
          name="vendor"
          value={formData.vendor}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productCategory">
        <Form.Label>Product Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ProductForm;
