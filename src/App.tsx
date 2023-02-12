import React from 'react';
import { Routes, Route } from 'react-router-dom'
import EventDetailsPage from './pages/EventDetailsPage';
import SeasonDetailsPage from './pages/SeasonDetailsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SeasonDetailsPage/>} />
        <Route path="/event/:id" element={<EventDetailsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
