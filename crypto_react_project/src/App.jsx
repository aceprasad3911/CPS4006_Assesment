import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from "./components/Home";
import Visual from "./components/Visual";
import './App.css'

function App() {
  const [sharesData, setSharesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=23JR7N38DO3LVLYM');
        const data = await response.json();
        setSharesData(data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='App'>
      <Router>
        <ul className='App-header'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/visual">Visual</Link></li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/visual" element={<Visual data={sharesData}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// to access React Project enter:
// cd crypto_react_project
// npm run dev