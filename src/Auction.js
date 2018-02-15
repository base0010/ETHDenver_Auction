import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

class Auction extends Component{



    render(){
        return(
       
            <div>
                <Link to='/danny'>Danny</Link>
                <br></br>
                <Link to='/cat'>Cat</Link>
                <br></br>
                <Link to='/3'>3</Link>


            </div>
        )
}

        
    
}

export default Auction
