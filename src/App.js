import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import LatestPhotos from './components/LatestPhotos';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="content-block">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="cb-title">Home-Page</h2>
              <div className="row">
              <Route exact path="/" render={props => (
                <LatestPhotos/>
              )}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
