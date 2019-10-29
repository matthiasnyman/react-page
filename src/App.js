import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';

import Stopwatch from './components/stopwatch/Stopwatch';
import Todo from './components/Todo/Todo';
import Home from './components/Home/Home';


function App(){
  return (
    <Router>
      <nav>
        {/* <h2>React projekt site</h2> */}
        <ul>
          <div></div>
          <li>
            <Link to="/"><h2>React projekt site</h2></Link>
          </li>
          <div id='nav-box'>
            <li>
              <Link to="/stopwatch">Stopwatch</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
          </div>
        </ul>
      </nav>


      <Switch>
        <Route path="/stopwatch">
          <Stopwatch  />
        </Route>
        <Route path="/todo">
          <Todo  />
        </Route>
        <Route path="/">
          <Home  />
        </Route>
      </Switch>
    </Router>
  )
}


export default App;
