import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import NotFound from "../Pages/NotFound";
import ProductDisplay from "../Components/ProductCard/ProductDisplay";
import ProductPortfolio from "../Components/ProductCard/ProductPortfolio";
import Offers from "../Components/Categories/Offers";
import Mens from "../Components/Categories/Mens";
import Womens from "../Components/Categories/Womens";
import Kids from "../Components/Categories/Kids";
import Electronics from "../Components/Categories/Electronics";
import PersonalCare from "../Components/Categories/PersonalCare";
import Cart from "../Pages/Cart";
import User from "../Pages/User";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:productId",
        element: <ProductPortfolio />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/mens",
        element: <Mens />,
      },
      {
        path: "/womens",
        element: <Womens />,
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/electronics",
        element: <Electronics />,
      },
      {
        path: "/personal-care",
        element: <PersonalCare />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default Router;
