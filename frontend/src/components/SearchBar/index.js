import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import debounce from 'lodash/debounce';

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



  const promiseOptions = inputValue => {
    console.log('inputValue :>> ', inputValue);

    return new Promise(resolve => {
      setTimeout(async () => {
        const { data: funds } = await api.get()
        const mapedFunds = mapFunds(funds)
        resolve(filterFunds(inputValue, mapedFunds));
      }, 1000);
    });
  }

  return (
    <AsyncSelect
      cacheOptions
      // defaultOptions
      loadOptions={debounce(promiseOptions, 1000)}
      placeholder="Busque por nome ou CNPJ"
      onChange={props.changeFunction} />
  );
}
