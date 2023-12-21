// AccountPage.js
import React from 'react';

const AccountPage = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <p>Email: {user.email}</p>
      {/* Add other user information as needed */}
      <div>
        {/* Add links to settings, orders, wishlist, etc. */}
        <a href="/account/settings">Settings</a>
        <a href="/account/orders">Orders</a>
        <a href="/account/wishlist">Wishlist</a>
      </div>
    </div>
  );
};

export default AccountPage;
