import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import ScanPage from './components/Scan';
import Parkir from './components/Parkir';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/scan">Scan</Link></li>
            <li><Link to="/realtime">Data Parkir</Link></li>
            <li><Link to="/data-parkir">Data Bulanan</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/scan" component={ScanPage} />
          <Route path="/data-parkir" component={Parkir} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;