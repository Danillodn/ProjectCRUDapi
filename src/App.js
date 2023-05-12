import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Edit from "./pages/edit"
import Home from "./pages/home"
import Post from "./pages/post"
import Readmore from "./pages/readmore"




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/post" element={<Post />} />
        <Route path="/readmore" element={<Readmore />} />
      </Routes>
    </Router>
  );
}

export default App;
