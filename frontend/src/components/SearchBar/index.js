import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

import api from '../../api/api'

import './styles.css'

export default props => {


  const mapFunds = (funds) => {
    const teste = funds.map(fund => {
      return {
        label: fund.name,
        value: fund.cnpj,
        ...fund
      }
    })
    console.log('teste :>> ', teste);
    return teste
  }

  const filterFunds = (inputValue, funds) => {
    return funds.filter(fund =>
      fund.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const serchFunds = async () => {
    const { data: funds } = await api.get()
    return funds
  }

  const funds = serchFunds()
  const mapedFunds = mapFunds(funds)


  const promiseOptions = inputValue => {
    console.log('inputValue :>> ', inputValue);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(filterFunds(inputValue, mapedFunds));
      }, 1000);
    });
  }

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      loadOptions={promiseOptions}
      onChange={props.changeFunction} />
  );
}
