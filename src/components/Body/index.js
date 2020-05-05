import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import SearchBar from '../SearchBar/index'
import Cards from '../Cards/index'

import './styles.css'

export default props => {
  const [funds, setFunds] = useState([])
  const [fundsCards, setFundsCards] = useState([])
  const [display, setDisplay] = useState("none")

  function handleSearchBarChange(selectedOption) {
    const tem = fundsCards.filter(fund => {
      return fund.CNPJ === selectedOption.value
    })

    if (tem.length === 0) {
      handleHideError(false)

      const filteredFund = funds.filter(fund => {
        return fund.CNPJ === selectedOption.value
      })

      setFundsCards([filteredFund[0], ...fundsCards])
    } else {
      handleHideError(true)
    }
  }

  const handleHideError = (show) => {
    if (show) {
      setDisplay("inline")
    } else {
      setDisplay("none")
    }
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
      <section className="searchs">
        <SearchBar Funds={funds} handleOnChange={handleSearchBarChange} />
        <span style={{ color: '#DB340B', display }}>Essa cota já foi adicionada . . .</span>
      </section>

      <Cards Funds={fundsCards}></Cards>
    </div>
  )
}