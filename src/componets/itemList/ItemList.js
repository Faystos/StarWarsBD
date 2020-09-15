import React, { Component } from 'react';
import SwapiService from '../../services/Services';
import Loader from '../loader';
import './itemList.css';

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    persons: null,
  }

  componentDidMount() {
   this.onLoadPersons();    
  }

  onLoadPersons() {
    this.swapiService.getAllPeoples()
      .then(persons => this.setState({ persons }));
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {      
      return (
        <li className = "list-group-item" key = { name } onClick = { () => this.props.onItemSeceted(id) }>
          { name }
        </li>
      );
    });
  }

  render() {
    const { persons } = this.state;   
    if (!persons) return <Loader />;
    const person = this.renderItems(persons);    
    return (
      <ul className="item-list list-group">
        { person }
      </ul>
    );
  }
}