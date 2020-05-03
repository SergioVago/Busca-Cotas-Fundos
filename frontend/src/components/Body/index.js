import React from 'react'

import SearchBar from '../SearchBar/index'
import Cards from '../Cards'
import './styles.css'

export default props => {
  return (
    <div id="container">
      <h1>Buscar</h1>
      <p>Encontre o valor <span class="hightlight">atualizado</span> da sua cota</p>
      <input type="text" placeholder="Busque por nome ou CNPJ" />
      <SearchBar />
      <section class="buttons">
        <button>Popular</button>
        <button>Trending</button>
        <button>Recentes</button>
        <button>Favoritos</button>
      </section>

      <section class="cotas">
        <Cards/>
        
      </section>
    </div>
  )
}