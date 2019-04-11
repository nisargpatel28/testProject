import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Teachers from './Teachers';
import AddTeachers from './AddTeachers';
import ViewTeacher from './ViewTeacher';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/teachers" component={Teachers} />
      <Route path="/addteachers" component={AddTeachers} />
      <Route path="/viewteacher/:id" component={ViewTeacher} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
