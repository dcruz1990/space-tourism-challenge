import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./index.css";
import Crew from "./routes/Crew";
import Destination from "./routes/Destination";
import Technology from "./routes/Technology";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
