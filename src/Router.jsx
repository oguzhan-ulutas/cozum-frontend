import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import Login from "./components/01-login/Login";
import ErrorPage from "./ErrorPage";
import Form from "./components/01-login/Form";
import SignUpForm from "./components/02-signup/SignUpForm";
import Home from "./components/03-home/Home";
import CategoryDetail from "./components/04-category-detail/CategoryDetail";
import ProductDetail from "./components/05-product-detail/ProductDetail";

const Router = () => {
  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [name, setName] = useState("");

  const [token, setToken] = useState("");

  // Home page states
  const [categories, setCategories] = useState([]);

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function formatNumber(input) {
    // Convert the input to a number and round to two decimal places
    const roundedNumber = parseFloat(input).toFixed(2);

    // Format the number with commas as the thousands separator
    const formattedNumber = roundedNumber.toString().replace(/\./g, ",");

    return formattedNumber;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Login
          token={token}
          setToken={setToken}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          remember={remember}
          setRemember={setRemember}
        />
      ),
      children: [
        {
          path: "/",
          element: (
            <Form
              token={token}
              setToken={setToken}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              remember={remember}
              setRemember={setRemember}
            />
          ),
        },
        {
          path: "signup",
          element: (
            <SignUpForm
              token={token}
              setToken={setToken}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              name={name}
              setName={setName}
            />
          ),
        },
      ],
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: (
        <Home
          categories={categories}
          setCategories={setCategories}
          capitalizeFirstLetter={capitalizeFirstLetter}
          formatNumber={formatNumber}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/category/:id",
      element: (
        <CategoryDetail
          categories={categories}
          capitalizeFirstLetter={capitalizeFirstLetter}
          formatNumber={formatNumber}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/product/:productid",
      element: (
        <ProductDetail
          categories={categories}
          capitalizeFirstLetter={capitalizeFirstLetter}
          formatNumber={formatNumber}
        />
      ),
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
