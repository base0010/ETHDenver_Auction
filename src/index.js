import React from 'react'
import ReactDOM from 'react-dom'
import Danny from './App'
import Cat from './Cat'
import Item3 from './Item3'
import Stats from './Stats'
import Auction from './Auction'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {Routes} from './routes'

ReactDOM.render(
  (
    <Router>
    <Switch>
    <Route exact path="/" component={Auction}/>
    <Route exact path="/danny" component={Danny}/>
    <Route exact path="/cat" component={Cat}/>
    <Route exact path="/3" component={Item3}/>

    </Switch>
    </Router>
  )
  ,
  document.getElementById('root')
);
