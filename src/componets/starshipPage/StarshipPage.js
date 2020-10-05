import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import Row from '../row';

export default class StarshipPage extends Component {

  state = {
    starshipSelected: 3
  };

  onSelectedStarship = id => {
    this.setState({ starshipSelected: id });        
  };

  render() {
    const { starshipSelected } = this.state;
    const { getDataItems, getDataItem, getImg } = this.props;

    const itemList = (
      <ItemList
        onItemSeceted = { this.onSelectedStarship }
        getDataItems = { getDataItems } 
        renderItem = {({ name}) => `${name}`}
      />
    );

    const personDetails = (
      <ItemDetails itemId = { starshipSelected } getDataItem = { getDataItem } getImg = { getImg }/>
    );
    return(
      <Row 
        left = { itemList }
        rigth = { personDetails } />
    );
  }
}