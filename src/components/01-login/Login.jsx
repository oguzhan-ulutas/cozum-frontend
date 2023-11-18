import backround from "../../assets/Picture.png";
import logo from "../../assets/Logo.png";
import Form from "./Form";

import "./Login.css";

const Login = ({
  token,
  setToken,
  email,
  setEmail,
  password,
  setPassword,
  remember,
  setRemember,
}) => {
  return (
    <div className="content-container">
      <img
        className="backround-image"
        src={backround}
        alt="A book cafe with some books and desk lamb"
      />
      <div className="form-div">
        <img src={logo} alt="Campany logo" className="logo-image" />
        <Form
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
        <button className="register-button">Register</button>
      </div>
    </div>
  );
};

export default Login;
