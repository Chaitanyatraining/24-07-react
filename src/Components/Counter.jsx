import React, { Component } from 'react'

export class Counter extends Component {
  constructor(){
    super()

    // this.state = {
    //   count:0,
    //   userData:[]
    // }
  }

  state = {
    count:0,
    userData:[]
  }
  
  handleIncrement = () => {
      this.setState({
        count: this.state.count + 1
      })
  }


  render() {
    return (
      <div>
        <h2>UsersList</h2>
        <h3>Count: {this.state.count}</h3>
        <button className='btn btn-primary me-4'
        onClick={()=>{this.handleIncrement()}}
        >Increment</button>
        <button className='btn btn-danger'>Decrement</button>
      </div>
    )
  }
}

export default Counter