
import ToyCard from '../components/ToyCard'
import React from 'react'
import ToyForm from '../components/ToyForm'
import ToyFilter from '../components/ToyFilter'
import {connect} from 'react-redux'
import {fetchToys}  from '../actions/toyActions'


const url ="http://localhost:3000/toys"

class ToysContainer extends React.Component{
   
    

    addToy = (toyData) => {
        // this.setState({toys: [...this.state.toys, toyData]})
        // this.setState({toys: [...this.state.toys, toyData]})
        // this.setState({toys: [...this.state.toys, toyData]})
        // this.setState({toys: [...this.state.toys, toyData]})
        this.setState((prevState, prevProps ) => {
            return {
                toys: [...prevState.toys, toyData]
            } 
        })
    }

    makeToyCards(){

        return this.props.toys.map(toy => <ToyCard increaseLikes={this.increaseLikes} toy={toy} />)
        // return displayedToys.map(toy => <ToyCard increaseLikes={this.increaseLikes} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} />)
    }

    increaseLikes = (id) => {
        const toy = this.state.toys.find((t)=> id === t.id)
        const configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({likes: toy.likes + 1})
        }

        fetch(`${url}/${id}`, configObj)
        .then(res => res.json())
        .then(json => {
            this.setState((prevState) => {
                 const idx = prevState.toys.findIndex((t)=> json.id === t.id)

                return {
                    toys: [...prevState.toys.slice(0,idx), json, ...prevState.toys.slice(idx + 1)]
                }
            })
        })
      
    }

    componentDidMount(){
      // where you make your fetch requests 

      console.log("A")
      this.props.fetchToys() //async stuff happening here
      console.log("D")
    }

   


    render(){
        return(
            <div id="toy-container">
        
                <div>
                    <ToyForm addToy={this.addToy}/>
                    <br></br>
                </div>
                
               {this.props.loading ? <h1>LOADING....</h1> : this.makeToyCards()}
            </div>
        ) 
    }
}

const mapStateToProps = (state, ownProps) => {

     const displayToys = state.toys.filter((toy) =>  
        toy.name.toLowerCase().includes(ownProps.searchTerm.toLowerCase()))
        
    return {
      toys: displayToys,
      loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchToys: () => dispatch(fetchToys())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToysContainer)