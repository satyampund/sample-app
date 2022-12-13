import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Home Page</h1>
      <Link to="/">Home</Link> <br />
      <Link to="/about">About</Link> <br />
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Home;
