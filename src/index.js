import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Stats from './Stats'
import Auction from './Auction'
import {BrowserRouter as Router, Route} from 'react-router-dom'


ReactDOM.render(
  (
  <Router>
    <div>
      <Route exact path = "/danny" component = {App}/>
      <Route exact path = "/stats" component = {Stats}/>
      <Route exact path = "/" component = {Auction}/>
    </div>
  </Router>)
  ,
  document.getElementById('root')
);
