import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetails, { Record } from '../itemDetails';
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
      <ItemDetails itemId = { personSelected } getDataItem = { getDataItem } getImg = { getImg }>
        <Record field="gender" label="Gender"/>
        <Record field="birthYear" label="Birth Year"/>
        <Record field="eyeColor" label="Eye Color"/>
      </ItemDetails>
    );
    return(
      <Row 
        left = { itemList }
        rigth = { personDetails } />
    );
  }  
};