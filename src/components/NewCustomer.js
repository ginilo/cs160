import React, { Component } from 'react'
import axios from 'axios'

export class NewCustomer extends Component {

constructor(props) {
  super(props)

  this.state = {
     firstName: '',
     lastName: '',
     email: '',
  }
}

changeHandler = (e) => {
    //makes use of name handler so its not wriiten for each attribute
    this.setState({ [e.target.name]: e.target.value})
}

submitHandler = (e) => {
    //Prevent page refreash
    e.preventDefault()
    console.log(this.state)
    axios
        .post("URL", this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

  render() {
    const { firstName, lastName, email } = this.state
    return (
      <div>
        {/*A form go get all values*/}
        <form onSubmit={this.submitHandler}>
            <div>
                <input 
                type = "text" 
                name = "firstName" 
                value = {firstName}
                onChange = {this.changeHandler}
                ></input>
            </div>
            <div>
                <input 
                type = "text" 
                name = "lastName" 
                value = {lastName}
                onChange = {this.changeHandler}
                ></input>
            </div>
            <div>
                <input 
                type = "text" 
                name = "email" 
                value = {email}
                onChange = {this.changeHandler}
                ></input>
            </div>
            <button type = "submit">Submit</button>
        </form>
        
      </div>
    )
  }
}

export default NewCustomer
