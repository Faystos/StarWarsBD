import React, { Component } from 'react';

import Loader from '../loader';
import ErrorIndicator from '../errorIndicator';
import './itemList.css';

export default class ItemList extends Component {
  

  state = {
    itemList: null,
    load: true,
    error: false,
  }

  componentDidMount() {
    const { getData } = this.props;
    this.onLoadPersons(getData);    
  }

  onLoadPersons(data) {    
    data()
      .then(itemList => this.setState({ itemList, load: false }))
      .catch(this.onError);
  }

  onError = err => {
    this.setState({ 
      error: true,
      load: false,
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.renderItem(item);
      return (
        <li className = "list-group-item" key = { id } onClick = { () => this.props.onItemSeceted(id) }>
          { label }
        </li>
      );
    });
  }

  render() {
    const { itemList, error, load } = this.state;    
    const hasData = !(load || error);
    const viewError = error ? <ErrorIndicator /> : null;
    const viewLoader = load ? <Loader /> : null;
    const viewPersons = hasData ? this.renderItems(itemList) : null;

    return (
      <ul className="item-list list-group">
        { viewError }
        { viewLoader }
        { viewPersons }
      </ul>
    );
  }
}