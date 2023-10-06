import React from "react";

import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import Wines from "./pages/Wines";
import Tapas from "./pages/Tapas";
import ReachUs from "./pages/ReachUs";

import "./App.css";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/drinks" element={<Drinks />} />
      <Route path="/wines" element={<Wines />} />
      <Route path="/tapas" element={<Tapas />} />
      <Route path="/reach-us" element={<ReachUs />} />
    </Routes>
  );
}
