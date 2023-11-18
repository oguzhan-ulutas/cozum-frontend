import { Link } from "react-router-dom";

import "./SignUpForm.css";
const SignUpForm = ({
  token,
  setToken,
  email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
}) => {
  const fetchSingUpData = (name, email, password) => {
    const url = "https://assign-api.piton.com.tr/api/rest/register";

    fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ name, email, password }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        // setToken(res.action_login.token);
        // // Save token to local storage
        // localStorage.setItem("token", JSON.stringify(token));
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const handleSubmit = () => {};
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-greeting">
          <p>Welcome back!</p>
          <h2>Login to your account</h2>
        </div>

        <div className="form-inputs" id="form-inputs">
          <div className="form-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="form-name"
              placeholder="John Dea"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
        </div>

        <button>Register</button>
      </form>
      <Link to="/login">
        <button className="register-button">Login</button>
      </Link>
    </>
  );
};

export default SignUpForm;
