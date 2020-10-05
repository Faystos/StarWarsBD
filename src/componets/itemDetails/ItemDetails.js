import React, { Component } from 'react';
import SwapiService from '../../services/Services';
import Loader from '../loader';
import ErrorIndicator from '../errorIndicator';

import './itemDetails.css';

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    img: null,
    load: true,
    error: false   
  };

  componentDidMount() {
    this.updatePerson();     
  }

  componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId) this.updatePerson(); 
  }

  updatePerson() {
    const { itemId, getDataItem, getImg } = this.props;
    if (!itemId) return;
    getDataItem(itemId)
    .then(item => this.setState({ item, img: getImg(item), load: false}))
    .catch(this.onError);
  } 
  
  onError = err => {
    this.setState({
      error: true,
      load: false,
    });
  }

  render() {
    const { item, img, load, error } = this.state;
    if (!item) return null;
    const hasData = !(load || error);
    const viewError = error ? <ErrorIndicator/> : null;
    const viewLoader = load ? <Loader/> : null;
    const viewPerson = hasData ? <Person item = { item } img = { img }/> :null;
    
    return (
      <div className="person-details card">
        { viewError }
        { viewLoader }
        { viewPerson }
      </div>
    )
  }
}

const Person = ({ item, img}) => {  
  const { id, name, gender, birthYear, eyeColor } = item;
  return (
    <React.Fragment>
      <img className="person-image" src = { img } alt={ name } />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}