import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Card from '../Card/index'

import './styles.css'

export default class Cards extends Component {

  render() {
    return (
      <div className="cards">
        {this.props.Funds.map((fund) => {
          console.log('fund :>> ', fund);
          return <Card Fund={fund} />
        })}
      </div>
    )
  }
}