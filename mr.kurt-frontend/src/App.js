import logo from './logo.svg';
import './App.css';
import AboutUs from './pages/AboutUs';
import { Container } from 'react-bootstrap';
import Navigation from './layout/Nav';
import CategoryList from './layout/CategoryList';
import DashBoard from './layout/DashBoard';
import { useEffect, useState } from 'react';

function App() {
  

  return (
    <div className="App">
      <DashBoard />
    </div>
  );
}

export default App;
