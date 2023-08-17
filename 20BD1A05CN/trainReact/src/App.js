import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Reserve from './components/Reserve';
import Result from './components/Result';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Reserve />} />
          <Route path="/results/:from/:to/:date/:numPeople" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
