import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/Home.tsx";
import BooksByGenre from "./pages/BooksByGenre.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:genre" element={<BooksByGenre />} />
    </Routes>
  </BrowserRouter>
);
