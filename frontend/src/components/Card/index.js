import React, { useState, useEffect } from 'react'
import './styles.css'

import star_fav from '../../assets/star.svg'
import star_fav_azul from '../../assets/star_azul.svg'

export default props => {
  const [icon, setIcon] = useState(star_fav)

  const handleFavorite = () => {
    console.log("Favorite activeted");
  }

  const handleImgChange = () => {
    icon == star_fav ?
      setIcon(star_fav_azul)
      :
      setIcon(star_fav)
  }

  return (
    <div className="card-section" >
      <div className="card" >
        <section>
          <h2>{props.Fund.name}</h2>
          <img onClick={handleImgChange} src={icon} alt="Favoritar" />
        </section>
        <hr></hr>
        <div className="content">
          <p>Nome: {props.Fund.name}</p>
          <p>Cota: {props.Fund.quota}</p>
          <p>Data: {props.Fund.date}</p>
          <p>CNPJ: {props.Fund.CNPJ}</p>
        </div>
      </div>
    </div>
  )
}