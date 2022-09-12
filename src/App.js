import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
class App extends Component {
  constructor(){
    super()
    this.state={
      value:'',
      item:[],
a:''
    }
    this.input=React.createRef()
    this.handleSubmit=this.handleSubmit.bind(this)
    // this.handleA=this.handleA.bind(this)
  }
handleSubmit(event){
  event.preventDefault();
  this.setState({
    value: this.input.current.value
  })
}
// handleA(b){
// this.setState({
//   a:b
// })
// }
componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((value)=>value.json())
  .then((value)=>{this.setState({
    item:value
  })})
}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            name:
            <input type="text" ref={this.input}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h1>{this.state.value}</h1>
        <h1>{this.state.item.title}</h1>
        <h1>{this.state.a}</h1>
        <MainComponent />
      </div>
    );
  }
}

export default App;