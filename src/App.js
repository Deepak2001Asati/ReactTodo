//import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage/homepage";
import Login from "./components/Login/login";
import Register from "./components/register/register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Homepage setLoginUser={setLoginUser} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
