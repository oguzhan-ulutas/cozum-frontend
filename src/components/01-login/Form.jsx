import { useEffect } from "react";

import "./Form.css";

const Form = ({
  token,
  setToken,
  email,
  setEmail,
  password,
  setPassword,
  remember,
  setRemember,
}) => {
  // If user checked remember check box that means we have the data,
  // We can directly call handleLogin when user come again
  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));
    const password = JSON.parse(localStorage.getItem("password"));

    if (email && password) {
      // If we have both email and password in local storage;
      // Set states
      setEmail(email);
      setPassword(password);
      // fetch token from the api
      fetchLoginData(email, password);
    }
  }, []);

  const fetchLoginData = (email, password) => {
    const url = "https://assign-api.piton.com.tr/api/rest/login";

    fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ email, password }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        setToken(res.action_login.token);
        // Save token to local storage
        localStorage.setItem("token", JSON.stringify(token));
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Saving info to local storage if remember check box click.
    if (remember) {
      // Note: it is not safe to save email and password to localStorage as is.
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("password", JSON.stringify(password));
    }

    fetchLoginData(email, password);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="form-greeting">
        <p>Welcome back!</p>
        <h2>Login to your account</h2>
      </div>

      <div className="form-inputs">
        <div className="form-input">
          <label htmlFor="email">E mail </label>
          <input
            type="email"
            name="email"
            id="form-email"
            minLength={6}
            maxLength={20}
            placeholder="john@mail.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            id="form-password"
            pattern="^[a-zA-Z0-9]+$"
            placeholder="••••••••"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="check-box-div">
          <input
            type="checkbox"
            name="remember"
            id="form-remember"
            onChange={(e) => {
              setRemember(e.target.checked);
            }}
          />
          <label htmlFor="remember">Remember Me</label>
        </div>
      </div>

      <button>Login</button>
    </form>
  );
};

export default Form;
