import React from 'react';
import Select from 'react-select';

import './styles.css'

export default props => {
  const mapFunds = (funds) => {
    const options = funds.map(fund => {
      return {
        label: fund.name + ` (${fund.CNPJ})`,
        value: fund.CNPJ
      }
    })
    return options
  }

  return (
    <Select
      className="selectFund"
      placeholder="Busque por nome ou CNPJ"
      options={mapFunds(props.Funds)}
      onChange={props.handleOnChange}
    />
  )
}