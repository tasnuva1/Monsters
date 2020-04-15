import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list-component";
import { SearchBar } from "./components/search-bar/search-bar";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => this.setState({ monsters: user }));
  }

  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monsterEl) =>
      monsterEl.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBar
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList allMonsters={filteredMonsters}>
          {/* render this CardList function */}
          {/* in the future I will change this thing that's why I add monster into state */}
        </CardList>
      </div>
    );
  }
}

export default App;
