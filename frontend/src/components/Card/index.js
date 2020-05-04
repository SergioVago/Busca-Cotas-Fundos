import React, { useState } from 'react'
import api from '../../services/api'
import { FaStar } from 'react-icons/fa'
import './styles.css'

import star_fav from '../../assets/star.svg'
import star_fav_azul from '../../assets/star_azul.svg'

export default props => {
  const [icon, setIcon] = useState(star_fav)

  const handleFavorite = () => {
    console.log("Favorite activeted");
  }

  const founds = [
    {
      nome: "BB MAPFRE LIQUIDEZ RF CURTO PRAZO AUTOMÁTICO FIC FI",
      data: "03/05/2020",
      cota: 1.005,
      cnpj: "24.018977",
    },
    {
      nome: "BB MAPFRE LIQUIDEZ RF CURTO PRAZO AUTOMÁTICO FIC FI",
      data: "03/05/2020",
      cota: 1.005,
      cnpj: "24.018977/0001-02",
    }
  ]

  const handleImgChange = () => {
    icon == star_fav ?
      setIcon(star_fav_azul)
      :
      setIcon(star_fav)
  }

  const index = props.index

  return (
    <div className="card-section">
      <div className="card">
        <section>
          <h2>{founds[index].nome}</h2>
          <img onClick={handleImgChange} src={icon} alt="Favoritar" />
        </section>
        <hr></hr>
        <div className="content">
          <p>Nome: {founds[index].nome}</p>
          <p>Cota: {founds[index].cota}</p>
          <p>Data: {founds[index].data}</p>
          <p>CNPJ: {founds[index].cnpj}</p>
        </div>
      </div >
    </div>
  );
}