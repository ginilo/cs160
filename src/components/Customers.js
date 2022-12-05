import React, { Component } from 'react'
import axios from 'axios'
import Fetching from './Fetching'


class Customers extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users: [],
         errorMsg: ' '
      }
    }
    
    componentDidMount() {
        axios.get('/users')

        .then(response => {
            console.log(response)
            this.setState({users: response.data.items})
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
        {/* <Fetching/> */}
        {
            users.length ?
            users.map(users => <div key={users.userId}>{users.firstName}{users.lastName}{users.email}</div>) :
            null
        }
        { errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    )
  }
}

export default Customers
