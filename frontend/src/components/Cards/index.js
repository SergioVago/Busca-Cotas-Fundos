import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Card from '../Card/index'

import './styles.css'

export default class Cards extends Component {

  render() {
    return (
      <div className="founds-container">
        <ul className="founds-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    );
  }
}