import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Card from '../Card/index'

import './styles.css'

export default class Cards extends Component {

  render() {
    return (
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}