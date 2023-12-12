import React from "react";
import { Container, Table, Button } from "react-bootstrap";

const Cart = ({ cartItems, handleRemoveItem }) => {
  return (
    <Container className="mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "50px", height: "50px", marginRight: "10px" }}
                />
                {item.name}
              </td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
              <td>
                <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {cartItems.length > 0 && (
        <div className="text-end">
          <p>Subtotal: ${calculateSubtotal(cartItems)}</p>
          <Button variant="primary">Checkout</Button>
        </div>
      )}
    </Container>
  );
};

const calculateSubtotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default Cart;
