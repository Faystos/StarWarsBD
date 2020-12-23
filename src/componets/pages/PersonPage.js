import React, { Component } from 'react';
import ItemList from '../itemList';
import {WidthData, WidtChildFunction} from '../hocHelper';
import ItemDetails, { Record } from '../itemDetails';
import Row from '../row';
import { SwapiServiceConsumer } from '../swapiServiceContext';

export default class PersonPage extends Component  {
  state = {
    personSelected: null
  };

  onSelectedPerson = id => {
    this.setState({ personSelected: id });        
  };

  render() {
    const { personSelected } = this.state;   
    const onItemSeceted = this.onSelectedPerson;   
    const renderName = ({name}) => <span>{ name }</span>;

    const item = (
      <SwapiServiceConsumer>
        { ({ getAllPeoples }) => {
          const Item = WidthData(WidtChildFunction(ItemList, renderName), getAllPeoples, onItemSeceted);
          return (
            <Item/>
          );
        } }
      </SwapiServiceConsumer>
    );

    const personDetails = (
      <SwapiServiceConsumer>
        {({getPerson, getPersonImg}) => {
          return (
            <ItemDetails itemId = { personSelected } getDataItem = { getPerson } getImg = { getPersonImg }>
              <Record field="gender" label="Gender"/>
              <Record field="birthYear" label="Birth Year"/>
              <Record field="eyeColor" label="Eye Color"/>
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
};