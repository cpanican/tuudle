import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import GetStarted from './components/GetStarted';
import Success from './components/Success';
import PickInstrument from './components/PickInstrument';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header className="header"/>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/get-started" element={<GetStarted/>} />
            <Route exact path="/success" element={<Success/>} />
            <Route exact path="/pick-instrument" element={<PickInstrument/>} />
          </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
