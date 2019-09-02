import React from "react";
import axios from 'axios'
import Quotes from './Quotes'
import './QuoteHolder.css'

class QuoteHolder extends React.Component {
constructor() {
    super();
    this.state = {
    quotes: []
    }
    this.editQuotes = this.editQuotes.bind(this)
}

editQuotes(id, quote) {
    axios
    .put("/api/quotes/" + id, { quote })
    .then(response => {
    this.setState({
    quotes: response.data
    })
})
                
}



deleteQuotes(id){
    axios
    .delete("/api/quotes/" +id )
    .then(res => {
        this.setState({
            quotes: res.data
        })
    })

}

        



    render(){
        return(
            <div className="Container">
                <section className="box">
                {this.props.quotes.map((el, index) => {
                    
                    return(
                        
                    <Quotes
                        key={index}
                        quote={el.quote}
                        editQuotes = {this.editQuotes} 
                        name={el.name}
                        id = {this.props.id}
                        newQuotes = {this.props.newQuotes}
                        deleteQuote = {this.deleteQuotes}
                        /> 
                        
                        )
                })}
                </section>
            </div>
        )
    }
}

export default QuoteHolder;