import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'
class Auction extends Component{



    render(){
        return(
       
            <div className="App">
            <nav className="navbar pure-menu pure-menu-horizontal">
            <a href="/" className="pure-menu-heading pure-menu-link">Auction</a>
                </nav>

        <main className="container">
        
                <ul >
                <li><Link to='/hives'>Hives</Link></li>
                <br></br>
                <li><Link to='/rewired'>Rewired</Link></li>
                <br></br>
                <li><Link to='/golden_god'>Golden God</Link></li>
                <br></br>
                <li><Link to='/deconstruction'>Deconstruction</Link></li>
                <br></br>
                <li><Link to='/benjamin'>Benjamin</Link></li>
                <br></br>
                <li><Link to='/andrew'>Andrew</Link></li>
                <br></br>
                <li><Link to='/abraham'>Abraham</Link></li>
                <br></br>
                <li><Link to='/mankind'>Mankind In Transition</Link></li>
                <br></br>
                <li><Link to='/resistance'>Resistance of Meat</Link></li>
                <br></br>
                <li><Link to='/leads'>Leads</Link></li>
                <br></br>
                <li><Link to='/mobile_ethereum'>Mobile Ethereum</Link></li>
                <br></br>
                <li><Link to='/kelvins_tower'>Kelvin's Tower</Link></li>
                <br></br>
                <li><Link to='/monets_mirror'>Monet's Mirror</Link></li>
                <br></br>
                <li><Link to='/amslv110'>A.MSL v11.0</Link></li>
                <br></br>
                <li><Link to='/absrv150'>A.BSR v15.0</Link></li>
                <br></br>
                <li><Link to='/aavgv140'>A.AVG v15.0</Link></li>
                <br></br>
                <li><Link to='/ether1'>Ether 1</Link></li>
                <br></br>
                <li><Link to='/ether2'>Ether 2</Link></li>
                <br></br>
                <li><Link to='/ether3'>Ether 3</Link></li>
                <br></br>
                <li><Link to='/ethereum_over_denver'>Ethereum Over Denver</Link></li>
                
                </ul>

            
            </main>
            </div>
       
            
        )
}

        
    
}

export default Auction
