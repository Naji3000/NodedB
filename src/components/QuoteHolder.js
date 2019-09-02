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
    this.deleteQuotes = this.deleteQuotes.bind(this)
}

editQuotes(id, quote) {
    console.log(id)
    axios
    .put(`/api/quotes/${id}`, { quote })
    .then(res => { this.props.updateQuotes(res.data)
    
    })             
}

deleteQuotes(id){
    axios
    .delete(`/api/quotes/${id}`)
    .then(res => { this.props.updateQuotes(res.data)
        
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
                        id = {el.id}
                        newQuotes = {this.props.newQuotes}
                        deleteQuotes = {this.deleteQuotes}
                        /> 
                        
                        )
                })}
                </section>
            </div>
        )
    }
}

export default QuoteHolder;