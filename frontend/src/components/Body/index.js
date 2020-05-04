import React from 'react'

import SearchBar from '../SearchBar/index'
import Cards from '../Cards/index'

import './styles.css'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

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



export default props => {
  return (
    <div id="container">
      <h1>Buscar</h1>
      <p>Encontre o valor <span className="hightlight">atualizado</span> da sua cota</p>
      <section className="searchs" >
        <SearchBar Funds={options} />
        {window.innerWidth > 800 ?
          squareButtons()
          :
          circleButtons()
        }

      </section>

      <Cards></Cards>
    </div>
  )
}