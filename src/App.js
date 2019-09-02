import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer"
import QuoteHolder from "./components/QuoteHolder"
import Add from "./components/Add"
import axios from 'axios'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    }

    this.updateQuotes = this.updateQuotes.bind(this)
    // this.editQuotes = this.editQuotes.bind(this)
  }


  componentDidMount = () => {
    axios
    .get("/api/quotes")
    .then(res => {
        this.updateQuotes(res.data)
    })
  }

  updateQuotes(value){
    this.setState({quotes: value})
  }
  // editQuotes(value) {
  //   this.setState({quotes: value})
  // }

  

  render() {
    const {quotes} = this.state
    return (
      <section>
      <Header />
      <QuoteHolder quotes={quotes}
      updateQuotes = {this.updateQuotes} />

      <Add  updateQuotes = {this.updateQuotes}/> 
      {/* <Edit editQuotes = {this.editQuotes} /> */}
      <Footer />
      
      </section>
      
    );
    }
}

export default App;