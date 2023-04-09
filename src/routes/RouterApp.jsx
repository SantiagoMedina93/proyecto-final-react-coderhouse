import { createBrowserRouter } from "react-router-dom";
import { Root, ItemRoot } from "./";
import { Cart } from "../components/cart/cartPage/Cart";
import { Checkout } from "../components/checkout/Checkout";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />
    },
    {
      path: "/category/:id",
      element: <Root />
    },
    {
      path: "/item/:id",
      element: <ItemRoot />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/checkout",
      element: <Checkout />
    },
  ]);