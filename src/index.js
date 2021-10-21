import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './componentes/home/Home';

ReactDOM.render(
  <Router>
  <div>
    <Switch>

        {/* Páginas */}
        <Route exact path='/' component={Home} />
      </Switch>
  </div>
</Router>,
  document.getElementById('root')
);