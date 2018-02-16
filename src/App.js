import React, { Component } from 'react'
import AuctionItemABI from '../build/contracts/AuctionItem.json'
import getWeb3 from './utils/getWeb3'
import ReactInterval from 'react-interval'


import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'
import Auction from './Auction';

//const contractAddress = "0x91d0013742C6A6a033d46ac9DA7b5E0416c35e24";
const contract = require('truffle-contract')


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      account: null,
      bid: null,
      address:this.props.address,

      auctionName: "noname",
      currentHighestBid: 0,
      squak: "nothing",
      currentHighestBidder: null, 
      web3: null,
      contract: null

    }
    
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })
    //Loads default account into state
      this.state.web3.eth.getAccounts((error, accounts) => {
        if(!error){
          this.account = accounts[0]
          console.log('Using this account:' + accounts[0])
        }
        else{
          console.log('Could not get accounts is your wallet unlocked?')
        }
      })
      // Instantiate contract once web3 provided.
      setInterval(this.instantiateContract(), 2500)
    })
    .catch(() => {
      console.log('Error finding web3.')

    })
  }
componentDidMount(){

}

  instantiateContract() {
    console.log('instantiating')
 
    var AuctionItem = contract(AuctionItemABI)
    AuctionItem.setProvider(this.state.web3.currentProvider)
    var contractAddress = this.state.address;
    
    var newItem = AuctionItem.at(contractAddress)
   newItem.then((instance)=>{
      instance.auctionName.call().then((result)=>{
         console.log('new res' + result)
      })
    })
   
    //Set the State
    newItem.then((instance) => {
      this.setState({contract: instance})
      console.log('Auction Address: ' + instance.address)

      instance.currentHighestBid.call().then((result)=>{
        var a = this.state.web3.fromWei(result.c, 'kwei') / 10 //shitty hack to get values to display right
        this.setState({currentHighestBid:a}); console.log('highest bid is:'  + this.state.web3.fromWei(result)); //why no hack here? 
      })
      
      //fix name
      instance.auctionName.call().then((result)=>{
        if(result){
        this.setState({auctionName: result}); console.log('the auction name is' + result.toString());
        }
      })

      instance.highBidder.call().then((result)=>{
        this.setState({currentHighestBidder: result}); console.log('Highest bidder ' + result)
      })

      instance.squak.call().then((result)=>{
        this.setState({squak: result}); console.log('Squak: ' + result)
      })

  })
  //AuctionItem.deployed().then((instance) => instance.allEvents(function(e,r){if(!e) console.log(r + e)}))

}
  
    
  placeBid(e){
    var bid = this.refs.weiValueField.value;
    var squak = this.refs.squak.value;

    e.preventDefault()
    if(bid)
    this.setState({bid:bid})
    this.setState({squak:squak})
    console.log('You just bid: ' + bid + ' wei')
    console.log(this.state.squak)
    this.state.contract.bid(squak, {from:this.account, value:this.state.web3.toWei(bid), gas:300000}).then((result)=>{
      console.log(result)
    }
  )}


  render() {
    return (
      <div className="App">
      <nav className="navbar pure-menu pure-menu-horizontal">
      <a href="/" className="pure-menu-heading pure-menu-link">Auction</a>
          </nav>

        
        <main className="container">
        
          <h1>{this.state.auctionName}</h1>
              <div>
                <img src = {this.props.img}></img>
              </div>
              
              <h4>The contract's address is @: {this.state.address}</h4>
              {/* <p><b>Heres some cool art for a good cause</b></p> */}
             
              {/* <p>{this.props.name}</p> */}
              <ReactInterval timeout={3000} enabled={true}
          callback={() => this.instantiateContract()} />

              <p>The current highest bid is: {this.state.currentHighestBid} ETH</p>
              <p>Bidder: {this.state.currentHighestBidder} </p>
              <p>said: <b>{this.state.squak}</b></p>
              
              
              
              
              <form onSubmit={this.placeBid.bind(this)}>
              <input type="text" ref="weiValueField" placeholder="Enter a New Bid"  />
              <input type="text" ref="squak" placeholder="Say Something"/>
              
              <button className="button">Bid</button>
              </form>
        </main>
      </div>
    );
  }
}

export default App

