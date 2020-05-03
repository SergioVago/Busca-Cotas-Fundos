import React from 'react'

import SearchBar from '../SearchBar/index'

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
      <p>Encontre o valor <span class="hightlight">atualizado</span> da sua cota</p>
      <SearchBar Funds={options} />

      <section class="buttons">
        <button>Popular</button>
        <button>Trending</button>
        <button>Recentes</button>
        <button>Favoritos</button>
      </section>

      <section class="cotas">
        <div class="cota">
          <h1>Título</h1>
          <p>Nome: Adam Advanced II FIC de FIM Créd Priv Invest Ext </p>
          <p>Cota:  1,90305953</p>
          <p>Data: 29/04/2020</p>
          <p>CNPJ: 24.018.977/0001-02</p>
        </div>
        <div class="cota">
          <h1>Título</h1>
          <p>Nome: Adam Advanced II FIC de FIM Créd Priv Invest Ext </p>
          <p>Cota:  1,90305953</p>
          <p>Data: 29/04/2020</p>
          <p>CNPJ: 24.018.977/0001-02</p>
        </div>
        <div class="cota">
          <h1>Título</h1>
          <p>Nome: Adam Advanced II FIC de FIM Créd Priv Invest Ext </p>
          <p>Cota:  1,90305953</p>
          <p>Data: 29/04/2020</p>
          <p>CNPJ: 24.018.977/0001-02</p>
        </div>

        <div class="cota"><h1>Título</h1>
          <p>Nome: Adam Advanced II FIC de FIM Créd Priv Invest Ext </p>
          <p>Cota:  1,90305953</p>
          <p>Data: 29/04/2020</p>
          <p>CNPJ: 24.018.977/0001-02</p></div>
        <div class="cota">
          <h1>Título</h1>
          <p>Nome: Adam Advanced II FIC de FIM Créd Priv Invest Ext </p>
          <p>Cota:  1,90305953</p>
          <p>Data: 29/04/2020</p>
          <p>CNPJ: 24.018.977/0001-02</p>
        </div>
        <div class="cota">
          <h1>Título</h1>
          <p>Nome: Adam Advanced II FIC de FIM Créd Priv Invest Ext </p>
          <p>Cota:  1,90305953</p>
          <p>Data: 29/04/2020</p>
          <p>CNPJ: 24.018.977/0001-02</p>
        </div>

        <div class="cota">
          <h1>Título</h1>
          <p>Nome: Adam Advanced II FIC de FIM Créd Priv Invest Ext </p>
          <p>Cota:  1,90305953</p>
          <p>Data: 29/04/2020</p>
          <p>CNPJ: 24.018.977/0001-02</p></div>
        <div class="cota">
          <h1>Título</h1>
          <p>Nome: Adam Advanced II FIC de FIM Créd Priv Invest Ext </p>
          <p>Cota:  1,90305953</p>
          <p>Data: 29/04/2020</p>
          <p>CNPJ: 24.018.977/0001-02</p>
        </div>
        <div class="cota">
          <h1>Título</h1>
          <p>Nome: Adam Advanced II FIC de FIM Créd Priv Invest Ext </p>
          <p>Cota:  1,90305953</p>
          <p>Data: 29/04/2020</p>
          <p>CNPJ: 24.018.977/0001-02</p>
        </div>
      </section>
    </div>
  )
}