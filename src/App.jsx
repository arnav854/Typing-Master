import React from "react";
import { Route, Routes } from "react-router-dom";
import Combined from "./components/Combined";
import Home from "./components/Home";
import LeaderBoard from "./components/LeaderBoard";
import Login_Signin from "./components/Login_Signin";
import InitialMatchLayout from "./pages/Match/InitialMatchLayout";
import CommonBotFight from "./pages/Match/CommonBotFight";

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
      <Route
        path="/match"
        element={
          <Combined>
            <InitialMatchLayout />
          </Combined>
        }
      />
      <Route
        path="/match/bot_easy"
        element={
            <CommonBotFight  BotWritingPersec={2} />
        }
      />
      <Route
        path="/match/bot_medium"
        element={
            <CommonBotFight  BotWritingPersec={4} />
        }
      />
      <Route
        path="/match/bot_hard"
        element={
            <CommonBotFight  BotWritingPersec={6} />
        }
      />
      

    </Routes>
  );
}

export default App;
