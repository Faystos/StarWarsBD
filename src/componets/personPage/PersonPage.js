import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
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
    const { getDataItems, getDataItem, getImg } = this.props;

    const itemList = (
      <ItemList
        onItemSeceted = { this.onSelectedPerson }
        getDataItems = { getDataItems } 
        renderItem = {({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`}
      />
    );

    const personDetails = (
      <ItemDetails itemId = { personSelected } getDataItem = { getDataItem } getImg = { getImg }/>
    );
    return(
      <Row 
        left = { itemList }
        rigth = { personDetails } />
    );
  }  
};