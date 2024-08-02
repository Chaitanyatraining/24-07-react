import {Component} from 'react'

class ClassComp extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    
    render(){
        return(
            <div>
                <p>This is ClassComp</p>
                <h3>Course Name: {this.props.course} </h3>
            </div>
        )
    }
}

export default ClassComp