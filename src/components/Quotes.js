import React from "react";
import './Quotes.css'





class Quotes extends React.Component{
    constructor(){
        super()
        this.state = {
            newQuote: "",
            displayInput: false
        }
        this.handleInput = this.handleInput.bind(this)
        this.toggleDisplay = this.toggleDisplay.bind(this)
    }
    handleInput(e){
        this.setState({newQuote: e.target.value})

    }
    
    toggleDisplay(e){
        this.setState({displayInput: !this.state.displayInput})
    
    }
    

    render(){

        const  {id} = this.props
    return(
        
        <div>
                
            {
            this.displayInput
                ?
    
                <div>
                    <input onChange={this.handleInput}/>
                    <button onClick={() => {
                    this.props.editQuotes(id, this.state.newQuote)
                    this.toggleDisplay()
                    }}>Edit2</button>
                </div>
                :
                    <h3>{this.props.quote}</h3>
                }
                <h3>{this.props.name}</h3>





    
    
            <div className="content-button">
            
            <button onClick={() => {this.toggleDisplay()}}>Edit</button>
            <button>Delete</button>
            </div>
            
        </div>
            
            
    )
    }
}



export default Quotes;