import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetails, {Record} from '../itemDetails';
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
        renderItem = {({ name, costInCredits, manufacturer}) => `${name} (${costInCredits}credits, ${manufacturer})`}
      />
    );

    const personDetails = (
      <ItemDetails itemId = { starshipSelected } getDataItem = { getDataItem } getImg = { getImg }>
        <Record field="model" label="Model"/>
        <Record field="costInCredits" label="Cost"/>
        <Record field="length" label="Length"/>
      </ItemDetails>
    );
    return(
      <Row 
        left = { itemList }
        rigth = { personDetails } />
    );
  }
}