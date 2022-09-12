import React, { Component } from 'react';

class MainComponent extends Component {
  constructor(){
    super()
    this.state={
      value:''
    }
  }
  handleClick(){
    this.setState({
      value:"nguyen phuc thuong"
    })
    console.log(this.props.aa)
  }

  render() {
    return (
      <div>
      <h1>{this.state.value}</h1>
        <button onClick={()=>this.handleClick()}>Click</button>
      </div>
    );
  }
}

export default MainComponent;