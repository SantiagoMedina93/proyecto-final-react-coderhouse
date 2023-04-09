import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

import { router } from './routes/routerApp';
import { CartProvider } from './context/CartProvider';
import "./main.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
    
  // </React.StrictMode>, 
)
