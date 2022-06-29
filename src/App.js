import React, { Component } from "react";
import Cardlist from "./Cardlist";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import Scroll from "./Scroll";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: '', 
    };
}

onSearchChange = (event) => {
    this.setState({ searchfield:event.target.value })
}


render() {
      const filteredRobots = this.state.robots.filter(robots=>{
          return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      })
      //comparing both robot names and the input names converting everything to lowercase
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <Cardlist robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
