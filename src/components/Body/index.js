import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import SearchBar from '../SearchBar/index'
import Cards from '../Cards/index'

import './styles.css'

export default props => {
  const [funds, setFunds] = useState([])
  const [fundsCards, setFundsCards] = useState([])

  const squareButtons = () => {
    return (
      <section className="squareButtons">
        <button>Popular</button>
        <button>Trending</button>
        <button>Recentes</button>
        <button>Favoritos</button>
      </section>
    )
  }

  const circleButtons = () => {
    return (
      <section className="circleButtons">
        <section className="iconSection">
          <div className="icon"></div>
          <label>Popular</label>
        </section>
        <section className="iconSection">
          <div className="icon"></div>
          <label>Trending</label>
        </section>
        <section className="iconSection">
          <div className="icon"></div>
          <label>Recentes</label>
        </section>
        <section className="iconSection">
          <div className="icon"></div>
          <label>Favoritos</label>
        </section>
      </section>
    )
  }

  function handleSearchBarChange(selectedOption) {
    const filteredFund = funds.filter(fund => {
      return fund.CNPJ === selectedOption.value
    })

    console.log('filteredFund', filteredFund)
    setFundsCards([filteredFund[0], ...fundsCards])
  }

  useEffect(() => {
    api.get('funds')
      .then(({ data }) => {
        setFunds(data)
      })
  }, [])

  return (
    <div id="container">
      <h1>Buscar</h1>
      <p>Encontre o valor <span className="hightlight">atualizado</span> da sua cota</p>
      <section className="searchs" >
        <SearchBar Funds={funds} handleOnChange={handleSearchBarChange} />
        {window.innerWidth > 800 ?
          squareButtons()
          :
          circleButtons()
        }

      </section>

      <Cards Funds={fundsCards}></Cards>
    </div>
  )
}