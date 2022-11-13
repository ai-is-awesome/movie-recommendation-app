import React, { useEffect, useState } from "react";
import "./styles/reset.css";
import "./styles/App.css";
import "./styles/scss/main.scss";
import Login from "./Components/LoginForm/Login";

function App() {
  const [data, setData] = useState(null);
  const [user, setuser] = useState(null);

  return (
    <div>
      <Login />
    </div>
  );
}

export default App;