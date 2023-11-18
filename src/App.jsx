import { useState } from "react";

import Login from "./components/Login";

function App() {
  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const [token, setToken] = useState("");

  return (
    <>
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
    </>
  );
}

export default App;
