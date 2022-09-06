import React from 'react';
import { Routes, Route } from 'react-router-dom';
import pages from './pages';
import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<pages.MainPage />} />
      <Route exact path="/add-customer" element={<pages.AddCustomerPage />} />
      <Route exact path="/:id" element={<pages.DetailsPage />} />
    </Routes>
  );
}

export default App;
