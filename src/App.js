import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage, { loader as producsTrendingtLoader } from "./pages/HomePage";
import { loader as producstLoader } from "./pages/ShopPage";
import { loader as productLoader } from "./pages/DetailPage";
const DetailPage = lazy(() => import('./pages/DetailPage'))
const ShopPage = lazy(() => import('./pages/ShopPage'))
const CartPage = lazy(() => import('./pages/CartPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'))
const routers = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage />, loader: producsTrendingtLoader },
      { path: 'shop', element: <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}><ShopPage /></Suspense>, loader: producstLoader },
      { path: 'detail/:productId', element: <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}><DetailPage /></Suspense>, loader: productLoader },
      { path: 'cart', element: <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}><CartPage /></Suspense> },
      { path: 'checkout', element: <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}><CheckoutPage /> </Suspense> },
    ]
  },
  { path: '/login', element: <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}><LoginPage /></Suspense> },
])
function App() {
  return (
    <RouterProvider router={routers} />
  );
}

export default App;
