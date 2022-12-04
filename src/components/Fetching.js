import axios from 'axios'
import React, {useState, useEffect} from 'react'

function Fetching() {
    const [users, setUsers] = useState({})
    const [id, setId] = useState('FrMlMqaP0oia4V2XPtwz')

    useEffect( () => {
        axios.get(`/users/${id}`)
        .then(res => {
        console.log(res)
        setUsers(res.data)
    })
    .catch(err => {
        console.log(err)
    }) 
}, [id])
  return (
    <div>
        <input type= "text" value={id} onChange={event => setId(event.target.value)} />
        <div>{users.firstName}</div>
      {/* <ul>
        {
            users.map(
                user => <li key = {user.id}>{user.name}</li>)
        }
      </ul> */}
    </div>
  )
}

export default Fetching
