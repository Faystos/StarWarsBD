import React, { Component } from 'react';
import SwapiService from '../../services/Services';
import Loader from '../loader';
import ErrorIndicator from '../errorIndicator';

import './personDetails.css';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    load: true,
    error: false   
  };

  componentDidMount() {
    this.updatePerson();     
  }

  componentDidUpdate(prevProps) {
    if(this.props.personId !== prevProps.personId) this.updatePerson(); 
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) return;
    this.swapiService.getPerson(personId)
    .then(person => this.setState({ person, load: false}))
    .catch(this.onError);
  } 
  
  onError = err => {
    this.setState({
      error: true,
      load: false,
    });
  }

  render() {
    const { person, load, error } = this.state;
    if (!person) return null;
    const hasData = !(load || error);
    const viewError = error ? <ErrorIndicator/> : null;
    const viewLoader = load ? <Loader/> : null;
    const viewPerson = hasData ? <Person person = { person }/> :null;
    
    return (
      <div className="person-details card">
        { viewError }
        { viewLoader }
        { viewPerson }
      </div>
    )
  }
}

const Person = ({ person}) => {  
  const { id, name, gender, birthYear, eyeColor } = person;
  return (
    <React.Fragment>
      <img className="person-image" src = {`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=",kf" />
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