import React from "react";
import { Route, Routes } from "react-router-dom";
import Combined from "./components/Combined";
import Home from "./components/Home";
import LeaderBoard from "./components/LeaderBoard";
import Login_Signin from "./components/Login_Signin";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Combined>
            <Home />
          </Combined>
        }
      />

      <Route
        path="/leaderboard"
        element={
          <Combined>
            <LeaderBoard />
          </Combined>
        }
      />

      <Route
        path="/Login+Signin"
        element={
          <Combined>
            <Login_Signin />
          </Combined>
        }
      />
      

    </Routes>
  );
}

export default App;
