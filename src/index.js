import React from 'react'
import ReactDOM from 'react-dom'
import Danny from './App'
import App from './App'
import Cat from './Cat'
import Item3 from './Item3'
import Item4 from './Item4'
import Stats from './Stats'
import Real from './Danny'
import Auction from './Auction'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {Routes} from './routes'

ReactDOM.render(
  (
    <Router>
    <Switch>
      <Route exact path='/' component={Auction}/>
      <Route exact path="/stats" component={Stats}/>
      
     <Route exact path='/rewired' render={(props) => (
        <App {...props} img="rewired.JPG" name = "Re-Wired" address = "0x91d0013742C6A6a033d46ac9DA7b5E0416c35e24"/>
      )}/>
      <Route exact path='/hives' render={(props) => (
        <App {...props} img="hives.JPG" name = "Hives" address = "0xD827FE6499E16499bFfA245cB8904D4ceC20405D"/>
      )}/>
      <Route exact path='/golden_god' render={(props) => (
        <App {...props} img="golden_god.JPG" name = "golden_god" address = "0x4c1551Fb1297A7eF88257E8F81aAD7fa25290584"/>
      )}/>
      <Route exact path='/deconstruction' render={(props) => (
        <App {...props} img="deconstruction.JPG" name = "deconstruction" address = "0xC7f4D34847F4f9601B32850B4B54e429f251774a"/>
      )}/>
      <Route exact path='/benjamin' render={(props) => (
        <App {...props} img="benjamin.JPG" name = "benjamin" address = "0xdBC71D8C921B267e59A6Ad92c4Fbf4d597c83F44"/>
      )}/>
      <Route exact path='/andrew' render={(props) => (
        <App {...props} img="andrew.JPG" name = "andrew" address = "0xFfF2821629a979FC29C334ad7648C6BF78ef32Aa"/>
      )}/>
       <Route exact path='/abraham' render={(props) => (
        <App {...props} img="abraham.JPG" name = "abraham" address = "0x89AbA6C49AD497CBB23282518f23183c958E8688"/>
      )}/>
      <Route exact path='/mankind' render={(props) => (
        <App {...props} img="mankind.JPG" name = "abraham" address = "0x248f27e8e8478c7fb745205a1e603982eaf4a273"/>
      )}/>

      <Route exact path='/resistance' render={(props) => (
        <App {...props} img="resistance.JPG" name = "abraham" address = "0x7A7EC07803Ee7fEa9566aE51eD1B63BC65dAb867"/>
      )}/>
            <Route exact path='/leads' render={(props) => (
        <App {...props} img="leads.JPG" name = "abraham" address = "0x1963a22024a150a43586FA01c4d3F06e4784Bc15"/>
      )}/>
      <Route exact path='/mobile_ethereum' render={(props) => (
        <App {...props} img="mobile_ethereum.JPG" name = "abraham" address = "0x96613deda35442b027b2d968c8e1919d2de16ded"/>
      )}/>
      <Route exact path='/kelvins_tower' render={(props) => (
        <App {...props} img="kelvins_tower.JPG" name = "abraham" address = "0xa2619e633077377106b8ab3d554b1f35fb1a177b"/>
      )}/>
      <Route exact path='/radiant_vision' render={(props) => (
        <App {...props} img="radiant_vision.JPG" name = "abraham" address = "0x73b5d7fc9fc1d2aab0122fb6242d16c753dd0df0"/>
      )}/>
      <Route exact path='/monets_mirror' render={(props) => (
        <App {...props} img="monets_mirror.JPG" name = "abraham" address = "0xF37b0473Bf2E0648E29bfB07AbE29af56648187C"/>
      )}/>
      <Route exact path='/amslv110' render={(props) => (
        <App {...props} img="amslv110.JPG" name = "abraham" address = "0x61f60e1a20fdc2a451e2eec1f571ff38c08e115f"/>
      )}/>
      <Route exact path='/absrv150' render={(props) => (
        <App {...props} img="absrv150.JPG" name = "abraham" address = "0x6855e361bbbe7a5e6fd7321e5b6778484c7fab23"/>
      )}/>
      <Route exact path='/aavgv140' render={(props) => (
        <App {...props} img="aavgv140.JPG" name = "abraham" address = "0x46c55f25de7822ae8cffaa343a34b98310ecc495"/>
      )}/>
      <Route exact path='/ether1' render={(props) => (
        <App {...props} img="ether1.JPG" name = "abraham" address = "0x981806468140943f59ff3af0a6fda184d9a46a66"/>
      )}/>
      <Route exact path='/ether2' render={(props) => (
        <App {...props} img="ether2.JPG" name = "abraham" address = "0xedacb6f8cda349894df04e8eb9ef8e6507b0da37"/>
      )}/>
      <Route exact path='/ether3' render={(props) => (
        <App {...props} img="ether3.JPG" name = "abraham" address = "0x832a9ffcafae8f0392ce1c2361d184958f2ded04"/>
      )}/>
      <Route exact path='/ethereum_over_denver' render={(props) => (
        <App {...props} img="ethereum_over_denver.JPG" name = "abraham" address = "0x2f97dd7fa9ff51cd34ee30536ca915bfc85f6ca0"/>
      )}/>
    </Switch>
    </Router>
  )
  ,
  document.getElementById('root')
);
