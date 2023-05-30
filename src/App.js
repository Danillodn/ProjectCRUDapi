import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Edit from "./pages/Edit/edit"
import Home from "./pages/Home/home"
import Post from "./pages/Post/post"
import Readmore from "./pages/Readmore/readmore"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/post" element={<Post />} />
        <Route path="/readmore/:id" element={<Readmore />} />
      </Routes>
    </Router>
  );
}

export default App;
