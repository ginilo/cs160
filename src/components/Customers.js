import React, { Component } from 'react'
import axios from 'axios'
import Fetching from './Fetching'


class Customers extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users: {},
         errorMsg: ' '
      }
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')

        .then(response => {
            console.log(response)
            this.setState({users: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error getting data'})
        })
    
    }

  render() {
    const { users, errorMsg } = this.state 
    return (
      <div>
        List of users
        <Fetching/>
        {
            users.length ?
            users.map(users => <div key={users.id}>{/*users.username}{users.email*/}</div>) :
            null
        }
        { errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    )
  }
}

export default Customers
