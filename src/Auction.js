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
        <h4> To bid on this site web3</h4>
        <h4> For mobile we reccomend <a href="https://www.cipherbrowser.com/">CIPHER browser</a></h4>
        <h4> For PC/macOS/Linux/Chrome we reccomend <a href="https://metamask.io">Metamask 🦊 </a></h4>
        <h6> Alternatively you can send a high bid dirrectly to the Art's QR code, please confirm it is the right address listed on the Art's page</h6>  
               
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
            <p> Many thanks to: truffle (react box), ganache, web3.js</p>
            <h5> Made with 💖 Marcus H. / GKT</h5>
            </div>
       
            
        )
}

        
    
}

export default Auction
     // <div className="App">
      // <nav className="navbar pure-menu pure-menu-horizontal">
      // <a href="/" className="pure-menu-heading pure-menu-link">Auction</a>
      //     </nav>

        
      //   <main className="container">
        
      //     <div className ="auction-img">
      //         <div>
      //           <img src = {this.props.img}></img>
      //         </div>
      //         </div>
      //         <h1>{this.state.auctionName}</h1>
      //         <h4>The contract's address is @: {this.state.address}</h4>
      //         {/* <p><b>Heres some cool art for a good cause</b></p> */}
             
      //         {/* <p>{this.props.name}</p> */}
      //         <ReactInterval timeout={3000} enabled={true}
      //     callback={() => this.instantiateContract()} />

      //         <p>The current highest bid is: {this.state.currentHighestBid} ETH</p>
      //         <p>Bidder: {this.state.currentHighestBidder} said: </p>
      //         <br></br>
      //         <p> <b>{this.state.squak}</b></p>
              
              
      //         <form onSubmit={this.placeBid.bind(this)}>
      //         <input type="text" ref="weiValueField" placeholder="Enter a New Bid"  />
      //         <input type="text" ref="squak" placeholder="Say Something"/>
      //         <button className="button">Bid</button>
      //         </form>
      //   </main>
      // </div>