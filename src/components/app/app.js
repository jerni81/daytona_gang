import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Nav from '../nav/nav'
 
const App = () => (
  <div>
    <h1>Daytona Gang Race Pool!!!</h1>
    <Router>
        <Nav />
    </Router>
  </div>
);
 
export default App;