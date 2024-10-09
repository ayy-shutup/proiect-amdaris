import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DiscoverPage from './components/DiscoverPage';
import CreateRecipePage from './components/CreateReceipePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
 <Route path="/create" element={<CreateRecipePage />} />
      </Routes>
    </Router>
  );
}

export default App;
