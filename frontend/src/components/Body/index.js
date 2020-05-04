import React from 'react'

import SearchBar from '../SearchBar/index'
import Cards from '../Cards/index'

import './styles.css'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


export default props => {
  return (
    <div id="container">
      <h1>Buscar</h1>
      <p>Encontre o valor <span className="hightlight">atualizado</span> da sua cota</p>
      <section className="searchs" >
        <SearchBar Funds={options} />

        <section className="buttons">
          <button>Popular</button>
          <button>Trending</button>
          <button>Recentes</button>
          <button>Favoritos</button>
        </section>
      </section>

      <Cards></Cards>
    </div>
  )
}