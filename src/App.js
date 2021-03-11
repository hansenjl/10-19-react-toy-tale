import { Component } from 'react';
import './App.css';
import ToysContainer from './containers/ToysContainer'
import ToyFilter from './components/ToyFilter'

class App extends Component{

  state = {
    search: ""
  }

  handleInputChange = (e) => {
    const search = e.target.value
    this.setState({search: search}) // will cause a rerender
  }

  render(){
    return (
      <div className="App">
        <h1>React Toy Tale</h1>
        <ToyFilter search={this.state.search} handleInputChange={this.handleInputChange}/> 
        <ToysContainer searchTerm={this.state.search} />
      </div>
    );
  }
}

export default App;
