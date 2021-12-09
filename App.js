import React, { Component } from 'react';
import AddInfo from './AddInfo';
import Display from './Display';


class App extends Component{
  state={
    personData : []
  }
  addInfo = (props) => {
    console.log(props);

    let personData = [...this.state.personData,props];
    this.setState({
      personData
    })
  }
  render() {
    return(
      <div>
        <h3>TO Do List</h3>
        <AddInfo addInfo={this.addInfo }/>
        <Display data={this.state.personData}/>

      </div>
    )
  }
}
export default App;