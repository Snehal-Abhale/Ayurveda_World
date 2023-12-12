/*

Core Deliverables
1. Install React Router (a project requirement) and Tailwind CSS (an optional approach to styling).
2. Create a root layout and two nested routes.
   a. Add a <nav> to the root and render the other routes in an outlet.
3. Handle errors with a custom component.
4. GET resources from your backend, and hold them in state.
5. Pass props down to a form with controlled inputs.
   a. On submit, POST to your backend, and update state.
*/

// Create React App
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// Tailwind CSS (along with ../tailwind.config.js)
import "./index.css";
// React Router
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
// Routes & Error Handling
// Note: By convention, routes are named `routes/[slug].jsx`.
import Error from './error';
import Root from "./routes/root";
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'bootstrap';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Login from './Login';
import ProductListingPage from "./ProductListingPage";
import ProductDetailsPage from './ProductDetailsPage';

library.add(faUser, faShoppingCart);



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "loginform",
        element: <Login />
      },
      {
        path: "/productCategories/:category",
        element: <ProductListingPage />,
        loader: async ({ params }) => {
          const { category } = params;
        
          // Modify the fetch URL to include the dynamic id parameter
          const allProductCategoriesDataResp = fetch(`/productCategories/${category}`).then(response => response.json());
        
          // Use Promise.all to wait for all requests to complete
          const [data1] = await Promise.all([allProductCategoriesDataResp]);
        
          // You can process the data as needed
          return { allProductCategoriesData: data1, category: category };
        }
        
      },
      {
        path: "/productDetails/:productCategory/:productID",
        element: <ProductDetailsPage />,
        loader: async ({ params }) => {
          const { productCategory, productID } = params;
        
          // Modify the fetch URL to include the dynamic id parameter
          const productDetailsByIdDataResp = fetch(`/productDetails/${productCategory}/${productID}`).then(response => response.json());
        
          // Use Promise.all to wait for all requests to complete
          const [data1] = await Promise.all([productDetailsByIdDataResp]);
        
          // You can process the data as needed
          return { productDetailsByIdData: data1, productCategory: productCategory, productID: productID };
        }
      }
    
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);