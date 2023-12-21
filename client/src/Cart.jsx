import { Container, Table, Button, ButtonGroup } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const loaderData = useLoaderData();
  const [cartItems, setCartItems] = useState(loaderData.cartItemsdata.cart_data);
  const navigate = useNavigate();

  const handleRemoveItem = (itemId) => {
    // Send a DELETE request to your server endpoint
    fetch(`/remove_from_cart/${itemId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(result => {
        // Update the local state (cartItems) after a successful removal
        setCartItems(cartItems.filter(item => item.id !== itemId));
      })
      .catch(error => {
        console.error('Error removing item:', error);
      });
  };
  const handleUpdateQuantity = (itemId, action) => {
    fetch(`/update_quantity/${itemId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ action }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(result => {
        // Update the local state (cartItems) after a successful quantity update
        setCartItems(cartItems.map(item => {
          if (item.id === itemId) {
            let newQuantity = item.quantity;

            if (action === 'increase') {
              newQuantity += 1;
            } else if (action === 'decrease' && item.quantity > 1) {
              newQuantity -= 1;
            }

            // Calculate the new total based on the updated quantity
            const newTotal = (parseFloat(item.price.replace('$', '')) * newQuantity).toFixed(2);

            return { ...item, quantity: newQuantity, total: newTotal };
          }

          return item;
        }));
      })
      .catch(error => {
        console.error('Error updating quantity:', error);
      });
  };


  const handleItemClick = (productId, productCategory) => {
    // Navigate to the product details page with the product ID
    navigate(`/productDetails/${productCategory}/${productId}`);
  };
  return (
    <Container className="mt-5">
      <Table hover responsive>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <br></br>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td onClick={() => handleItemClick(item.product_id, item.product_category)}>
                <img
                  src={item.product_image}
                  alt={item.name}
                  style={{ cursor: "pointer", width: "50px", height: "50px", marginRight: "10px" }}

                />
                {item.product_name}
              </td>
              <td>{item.price}</td>
              <td>
                <ButtonGroup>
                  <Button variant="outline-secondary" style={{ color: 'black' }} onClick={() => handleUpdateQuantity(item.id, 'decrease')}>-</Button>
                  <Button variant="outline-secondary" style={{ color: 'black' }} disabled>{item.quantity}</Button>
                  <Button variant="outline-secondary" style={{ color: 'black' }} onClick={() => handleUpdateQuantity(item.id, 'increase')}>+</Button>
                </ButtonGroup>
              </td>
              <td>${item.total}</td>
              <td>
                <Button variant="outline-secondary" onClick={() => handleRemoveItem(item.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </td>
            </tr>

          ))}
        </tbody>
      </Table>
      {cartItems.length > 0 && (
        <div className="text-end">
          <p className="fw-bold">Subtotal: ${calculateSubtotal(cartItems)}</p>
          <Button variant="primary">Checkout</Button>
        </div>
      )}
    </Container>
  );
};

const calculateSubtotal = (cartItems) => {
  const subtotal = cartItems.reduce((total, item) => {
    // Remove the dollar sign and convert to a float
    const price = parseFloat(item.price.replace('$', ''));
    return total + price * item.quantity;
  }, 0);

  // Round the subtotal to two decimal places
  return subtotal.toFixed(2);
};


export default Cart;
