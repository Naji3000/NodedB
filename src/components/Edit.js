import React, {Component} from 'react';
import axios from 'axios';


export default class Edit extends Component {
    constructor(){
        super()
        this.state = {
            quotes: "",
        }
    }

    handleEdit(){

    }

    
    


    render(){
        return(
            <div className="input">


            <section className='buttons'>

            <button>Edit</button>
            <button>Delete</button>
        
            </section>
            </div>
        )
    }
}

