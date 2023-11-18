import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import Login from "./components/01-login/Login";
import ErrorPage from "./ErrorPage";
import Form from "./components/01-login/Form";
import SignUpForm from "./components/02-signup/SignUpForm";

const Router = () => {
  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const [token, setToken] = useState("");

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
          path: "login",
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
      ],
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
