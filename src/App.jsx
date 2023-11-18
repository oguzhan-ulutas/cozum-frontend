import { useState } from "react";

import Login from "./components/Login";

function App() {
  const [token, setToken] = useState("");

  return (
    <>
      <Login token={token} setToken={setToken} />
    </>
  );
}

export default App;
