import React, { Component } from 'react';
import ItemList from '../itemList';
import {WidthData, WidtChildFunction} from '../hocHelper';
import ItemDetails, {Record} from '../itemDetails';
import Row from '../row';
import { SwapiServiceConsumer } from '../swapiServiceContext';

export default class StarshipPage extends Component {

  state = {
    starshipSelected: null
  };

  onSelectedStarship = id => {
    this.setState({ starshipSelected: id });        
  };

  render() {
    const { starshipSelected } = this.state;
    const onItemSeceted = this.onSelectedStarship;
    const renderName = ({name}) => <span>{ name }</span>;    

    const item = (
      <SwapiServiceConsumer>
        {({getAllStarships}) => {
          const Item = WidthData(WidtChildFunction(ItemList, renderName), getAllStarships, onItemSeceted); 
          return (
            <Item/>
          );
        }}
      </SwapiServiceConsumer>
    );

    const personDetails = (
      <SwapiServiceConsumer>
        {({getStarship, getStarshipImg}) => {
          return (
            <ItemDetails itemId = { starshipSelected } getDataItem = { getStarship } getImg = { getStarshipImg }>
              <Record field="model" label="Model"/>
              <Record field="costInCredits" label="Cost"/>
              <Record field="length" label="Length"/>
            </ItemDetails>
          );
        }}
      </SwapiServiceConsumer>     
    );

    return(
      <Row 
        left = { item }
        rigth = { personDetails } />
    );
  }
}