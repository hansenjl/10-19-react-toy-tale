import React from 'react'
import {connect} from 'react-redux'
import {createToy} from '../actions/toyActions'


class ToyForm extends React.Component{

    state = {
        name: "",
        image: ""
    }

    handleFormChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        }, () => console.log(this.state))
        // keep track of what the user typed in 
    }

    handleSubmit = (e) => {
         // prevent default 
        e.preventDefault()
       
        // set up our toy object 
        const toy = {...this.state, likes: 0}
        
        this.props.createToy(toy)
        // save to our current state of toys 
        this.setState({
           name: "",
           image: ""
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" onChange={this.handleFormChange} value={this.state.name}/>
                <label>Image:</label>
                <input type="text" name="image" onChange={this.handleFormChange} value={this.state.image} />
                <input type="submit" value="Add Toy" />
            </form>
        )
    }
}

export default connect(null, {createToy})(ToyForm)