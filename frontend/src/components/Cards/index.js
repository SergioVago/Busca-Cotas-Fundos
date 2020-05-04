import React, { Component } from 'react'
import Card from '../Card/index'

import './styles.css'

export default class Cards extends Component {

  render() {
    return (
      <div className="cards">
        {this.props.Funds.map((fund) => {
          return <Card Fund={fund} key={fund.id} />
        })}
      </div>
    )
  }
}