import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage, { loader as producsTrendingtLoader } from "./pages/HomePage";
import ShopPage, { loader as producstLoader } from "./pages/ShopPage";
import DetailPage, { loader as productLoader } from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage />, loader: producsTrendingtLoader },
      { path: 'shop', element: <ShopPage />, loader: producstLoader },
      { path: 'detail/:productId', element: <DetailPage />, loader: productLoader },
      { path: 'cart', element: <CartPage /> },
      { path: 'checkout', element: <CheckoutPage /> },
    ]
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
])
function App() {
  return (
    <RouterProvider router={routers} />
  );
}

export default App;
