import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import Crypto from "./components/Crypto";
import Watchlist from './components/Watchlist';
import Curconv from "./components/Curconv"
import Settings from "./components/Settings"
import ResponsiveGrid from './components/ResponsiveGrid';
import './index.css'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Crypto" className="nav-link">Crypto List</Link>
            </li>
            <li className="nav-item">
              <Link to="/Watchlist" className="nav-link">Crypto Watchlist</Link>
            </li>
            <li className="nav-item">
              <Link to="/Curconv" className="nav-link">Forex Calculator</Link>
            </li>
            <li className="nav-item">
              <Link to="/Settings" className="nav-link">Preferences</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

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
    <Router>
      <header className="header">
        <h1 className="text-center">St Mary's Crypto Solutions Ltd.</h1>
      </header>
      <NavBar />
      <ResponsiveGrid />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home sharesData={sharesData} />}></Route>
          <Route path="/Crypto" element={<Crypto sharesData={sharesData} />}></Route>
          <Route path="/Watchlist" element={<Watchlist sharesData={sharesData} />}></Route>
          <Route path="/Curconv" element={<Curconv sharesData={sharesData} />}></Route>
          <Route path="/Settings" element={<Settings sharesData={sharesData} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// to access React Project enter:
// cd crypto_react_project
// npm run dev