import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  /*Link,
  Switch unused imports*/
} from 'react-router-dom'


import App from './App';
import Resultado from './Resultado';
import Formularios from './Formularios';

render((
  <Router>
    <App>
      <Route path="/formularios" exact strict component={Formularios}/>
      <Route path="/pdf" exact strict component={Resultado}/>
    </App>
  </Router>
), document.getElementById('app'));
