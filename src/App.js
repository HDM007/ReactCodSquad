import './App.css';
import React from "react";
import SquadMember from "./components/SquadMember";
import squadmembers from "./squadmembers";

class App extends React.Component{
  state = {
    squadmembers: {},
  };

  loadSquad = () =>{
    this.setState({squadmembers})
  }


  
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <ul className="squadmembers">
          {Object.keys(this.state.squadmembers).map(key => <SquadMember key={key} index={key} details={this.state.squadmembers[key]}></SquadMember>)}
        </ul>
        <button onClick={this.loadSquad}>Load Squad</button>
      </header>
    </div>
  )};
}

export default App;
