import React, { Component } from 'react'
import AuctionItemABI from '../build/contracts/AuctionItem.json'
import getWeb3 from './utils/getWeb3'
const contract = require('truffle-contract')


import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class Stats extends Component{
    constructor(props){
        super(props)
        this.state = {
            account: null,
            bid: null,
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
            this.instantiateContract()
          })
          .catch(() => {
            console.log('Error finding web3.')
          })
        }
      
        
        instantiateContract() {
        
       
          const AuctionItem = contract(AuctionItemABI)
          AuctionItem.setProvider(this.state.web3.currentProvider)
          //AuctionItem.at(contractAddress) --for when it is deployed
      
          //Set the State
          AuctionItem.deployed().then(function(instance){
            this.setState({contract: instance})
            console.log('Auction Address: ' + this.state.contract.address)
      
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
            console.log(instance)
            var event =instance.NewHighestBid({}, {fromBlock: 0, toBlock: 10})
        
              // watch for changes
              event.watch(function(error, result){
                if (!error)
                  console.log(result);
                else (error)
                    console.log('error')
                
              })
      
      
        })
        
      }
    
componentDidMount(){
    console.log(this.state.contract)
    var event = this.state.contract.NewHighestBid({}, {fromBlock: 0, toBlock: 10})

      // watch for changes
      event.watch(function(error, result){
        if (!error)
          console.log(result);
        else (error)
            console.log('error')
        
      });
}

    render(){
        return(
            <div>
                <h1>stats</h1>
            </div>
        )
    }
}

export default Stats
