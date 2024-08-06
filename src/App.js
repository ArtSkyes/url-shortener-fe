import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShortUrl from './pages/ShortUrl';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:shortCode" element={<ShortUrl />} />
      </Routes>
    </Router>
  );
}

export default App;