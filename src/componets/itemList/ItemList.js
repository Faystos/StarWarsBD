import React, { Component } from 'react';
import SwapiService from '../../services/Services';
import Loader from '../loader';
import ErrorIndicator from '../errorIndicator';
import './itemList.css';

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    persons: null,
    load: true,
    error: false,
  }

  componentDidMount() {
   this.onLoadPersons();    
  }

  onLoadPersons() {
    this.swapiService.getAllPeoples()
      .then(persons => this.setState({ persons, load: false }))
      .catch(this.onError);
  }

  onError = err => {
    this.setState({ 
      error: true,
      load: false,
    });
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {      
      return (
        <li className = "list-group-item" key = { id } onClick = { () => this.props.onItemSeceted(id) }>
          { name }
        </li>
      );
    });
  }

  render() {
    const { persons, error, load } = this.state;    
    const hasData = !(load || error);
    const viewError = error ? <ErrorIndicator /> : null;
    const viewLoader = load ? <Loader /> : null;
    const viewPersons = hasData ? this.renderItems(persons) : null;

    return (
      <ul className="item-list list-group">
        { viewError }
        { viewLoader }
        { viewPersons }
      </ul>
    );
  }
}