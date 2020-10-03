import React, { Component } from 'react';
import ItemList from '../itemList';
import PersonDetails from '../personDetails';
import Row from '../row';

export default class PersonPage extends Component  {

  state = {
    personSelected: 3
  };

  onSelectedPerson = id => {
    this.setState({ personSelected: id });        
  };

  render() {
    const { personSelected } = this.state;
    const { getData } = this.props;

    const itemList = (
      <ItemList
        onItemSeceted = { this.onSelectedPerson }
        getData = { getData } 
        renderItem = {({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`}
      />
    );

    const personDetails = (
      <PersonDetails personId = { personSelected } />
    );
    return(
      <Row 
        left = { itemList }
        rigth = { personDetails } />
    );
  }  
};