import React, { Component } from 'react';
import ItemList from '../itemList';
import { WidthData, WidtChildFunction } from '../hocHelper';
import ItemDetails, { Record } from '../itemDetails';
import Row from '../row';
import { SwapiServiceConsumer } from '../swapiServiceContext';

export default class PlanetPage extends Component {
  state = {
    planetSelected: null
  };

  onSelectedPlanet = id => {
    this.setState({ planetSelected: id });        
  };

  render() {
    const { planetSelected } = this.state;   
    const onItemSeceted = this.onSelectedPlanet;   
    const renderName = ({ name }) => <span>{ name }</span>;

    const item = (
      <SwapiServiceConsumer>
        { ({ getAllPlanets }) => {
          const Item = WidthData(WidtChildFunction(ItemList, renderName), getAllPlanets, onItemSeceted);
          return (
            <Item/>
          );
        } }
      </SwapiServiceConsumer>
    );

    const personDetails = (
      <SwapiServiceConsumer>
        {({ getPlanet, getPlanetImg }) => {
          return (
            <ItemDetails itemId = { planetSelected } getDataItem = { getPlanet } getImg = { getPlanetImg }>
              <Record field="population" label="Население"/>
              <Record field="rotationPeriod" label="Период вращения"/>
              <Record field="diameter" label="Диаметр"/>
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