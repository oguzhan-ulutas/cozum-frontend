import "./Form.css";
const Form = () => {
  return (
    <form action="">
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
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password </label>
          <input type="password" name="password" id="form-password" required />
        </div>
        <div className="check-box-div">
          <input type="checkbox" name="remember" id="form-remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
      </div>

      <button>Login</button>
    </form>
  );
};

export default Form;
