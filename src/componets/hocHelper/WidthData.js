import React, { Component } from 'react';
import Loader from '../loader';
import ErrorIndicator from '../errorIndicator';

const WidthData = (View, getData, onItemSeceted) => {

  return class extends Component {
    state = {
      data: null,
      load: true,
      error: false,
    }
  
    componentDidMount() {     
      this.onLoadPersons(getData);         
    }
  
    onLoadPersons(data) {    
      data()
        .then(data => this.setState({ data, load: false }))
        .catch(this.onError);
    }
  
    onError = err => {
      this.setState({ 
        error: true,
        load: false,
      });
    }

    render() {
      const { data, error, load } = this.state;    
      const hasData = !(load || error);
      const viewError = error ? <ErrorIndicator /> : null;
      const viewLoader = load ? <Loader /> : null;
      const viewPersons = hasData ? <View {...this.props} data={data} onItemSeceted={onItemSeceted}/> : null;

      return (
        <>
          { viewError }
          { viewLoader }
          { viewPersons }
        </>
      );

    }
  }
}

export default WidthData;