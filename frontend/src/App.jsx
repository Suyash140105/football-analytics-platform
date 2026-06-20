import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Players from "./pages/players";
import Teams from "./pages/teams";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;