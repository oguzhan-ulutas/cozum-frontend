import "./Form.css";
const Form = () => {
  return (
    <form action="">
      <p>Welcome back!</p>
      <h2>Login to your account</h2>
      <div>
        <label htmlFor="email">E mail: </label>
        <input
          type="email"
          name="email"
          id="email"
          minLength={6}
          maxLength={20}
          placeholder="john@mail.com"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" required />
      </div>
      <div>
        <input type="checkbox" name="remember" />
      </div>

      <button>Login</button>
    </form>
  );
};

export default Form;
