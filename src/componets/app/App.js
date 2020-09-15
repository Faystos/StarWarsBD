import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../randomPlanet';
import ItemList from '../itemList';
import PersonDetails from '../personDetails';


export default class App extends Component {

  state = {
    personSelected: null
  };

  onSelectedPerson = id => {
    this.setState({ personSelected: id });
    console.log(id);
  };


  render () {
    const { personSelected } = this.state;
    return (
      <div>
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSeceted = { this.onSelectedPerson }/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId = { personSelected }/>
          </div>
        </div>
      </div>
    );
  }
  
}

