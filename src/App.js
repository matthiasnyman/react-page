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
import Sudoku from './components/sodoku/Sodoku';
import Home from './components/Home/Home';


function App(){
  return (
    <Router>
      <nav>
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
            <li>
              <Link to="/sudoku">Sudoku</Link>
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
        <Route path="/sudoku">
          {/* <Sudoku  /> */}
        </Route>
        <Route path="/">
          <Home  />
        </Route>
      </Switch>
    </Router>
  )
}


export default App;
