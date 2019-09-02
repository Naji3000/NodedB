import React, { Component } from "react";
import axios from "axios";
import './Add.css'

export default class Add extends Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      name: "",
      error: ""
    };
    this.handleName = this.handleName.bind(this)
    this.handleQuote = this.handleQuote.bind(this)

    // this.handleQuotes = this.handleQuotes.bind(this)
  
    
  }
// componentDidMount(){
//   axios.put("/api/quotes")
// }

  handleName(e){
    this.setState({name: e.target.value })
  }
  handleQuote(e){
    this.setState({quote: e.target.value})
  }
  
  
  submitQuote = () => {
    axios
    .post("/api/quotes", {
      quote: this.state.quote,
      name: this.state.name
    })
    .then(res => {this.props.updateQuotes(res.data)
    })

  }

  render(){
    return(
      <div className='input'>
        
          
      <input className='input-buttons'
        onChange={this.handleQuote}
        placeholder="Quote"
        />

        <input className='input-buttons-2'
        onChange={this.handleName}
        placeholder="Name"
        />

        <button className="Submit-Button"type="Submit" onClick={this.submitQuote}>Submit</button>
        {this.state.error ? this.state.error : ''}

        
        
        </div>
        
    )
  }
}