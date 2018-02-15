import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import React from 'react';

import Danny from './App'
import Stats from './Stats'
import Auction from './Auction'
import Cat from './Cat'


export const routes = (
    <Router>
    <Route exact path="/" component={Auction}/>
    <Route exact path="/danny" component={Danny}/>
    <Route exact path="/Cat" component={Cat}/>
    </Router>
)