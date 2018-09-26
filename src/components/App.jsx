import React, { Component } from 'react';

import SearchBar from '../containers/SearchBar';
import MortalityList from '../containers/MortalityList'

const defCountry = "France";
class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar defaultCountry = {defCountry}/>
        <MortalityList defaultCountry = {defCountry}/>
      </div>
    );
  }
}

export default App;
