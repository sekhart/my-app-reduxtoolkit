import React, { Component } from 'react';
import './App.css';
import Table from './Table'
import Form from './Form'

import { Greeting, DateFunc } from './Greeting';
import { Wishing } from './Greeting';
import { getCurrentDate, getCurHour } from './utils';

class App extends Component {
  state = {
    characters: [],

    greet: "Hello Sir!",
    date: getCurrentDate(),
    hour: getCurHour(),
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    })
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character]})
  }


  render() {
    const { characters, greet, hour, date } = this.state
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
        <Greeting greetingData={greet} />
        <Wishing wishData={hour} />
        <DateFunc dateData={date} />
      </div>
    );
  }
}

export default App;
