import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      const userId = sessionStorage.getItem("userId");
      
      if (userId) {
        userHasAuthenticated(true);
      } else {
        userHasAuthenticated(false);
      }
    } catch (e) {
      alert("Please login");
    }
  }



  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={`${isAuthenticated ? "/home" : "/login"}`} />}
      />

      {isAuthenticated ? (
        <Route path="/home" element={<Home onLogout={onLoad} />} />
      ) : (
        <Route
          path="/login"
          element={<Login isAuthenticated={isAuthenticated} onLogin={onLoad} />}
        />
      )}
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
