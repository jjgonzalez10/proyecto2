'use strict'
import React, { Component } from 'react';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Login from './Login';
import Formularios from './Formularios';
import Resultado from './Resultado';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
        </ul>
      
        <main>
         <Route path="/" exact strict component={Login}/>
         <Route path="/formularios" exact strict component={Formularios}/>
         <Route path="/pdf" exact strict component={Resultado}/>
        </main>
        


      </div>
      </Router>
    );
  }
}

export default App;
