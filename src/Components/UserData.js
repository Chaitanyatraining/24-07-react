import React, { Component } from 'react'
import ContactUs from './ContactUs'

class UserData extends Component {
    constructor(props){
        super(props)
        console.log('constructor excuted')
        this.state = {
            users:[]
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps executed')
        return null
    }

    componentDidMount(){
        console.log('componentdidmount')
        this.getUsersData()
    }

    getUsersData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json()
        this.setState({users: data})
        // console.log(this.state.users[0].id)
        }
    

  render() {
    return (
      <div>
        <h2>UserData</h2>
        <div>
            <h4>welcome to React</h4>
            <h2>Lists and Keys</h2>
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>UserName</th>
                    <th>email</th>
                </tr>
                {
                 this.state.users && this.state.users.length > 0 && this.state.users.map((user)=> (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>

                    </tr>
                 ))
                }
            </table>
        </div>
      </div>
    )
  }
}

export default UserData