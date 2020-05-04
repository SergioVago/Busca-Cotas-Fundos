import React, { useState } from 'react'
import './styles.css'

import star_fav from '../../assets/star.svg'
import star_fav_azul from '../../assets/star_azul.svg'

export default props => {
  const [icon, setIcon] = useState(star_fav)

  const handleImgChange = () => {
    icon === star_fav ?
      setIcon(star_fav_azul)
      :
      setIcon(star_fav)
  }

  const formatDate = (date) => {
    const newDate = date.split('-')
    return `${newDate[2][0]}${newDate[2][1]}/${newDate[1]}/${newDate[0]}`
  }

  const formatCnpj = (cnpj) => {
    const newCnpj = "14397462000109".replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
    return newCnpj
  }

  return (
    <div className="card-section">
      <div className="card" >
        <section>
          <h2>{props.Fund.name}</h2>
          <img onClick={handleImgChange} src={icon} alt="Favoritar" />
        </section>
        <hr></hr>
        <div className="content">
          <p>Nome: {props.Fund.name}</p>
          <p>Cota: {props.Fund.quote}</p>
          <p>Data: {formatDate(props.Fund.date)}</p>
          <p>CNPJ: {formatCnpj(props.Fund.CNPJ)}</p>
        </div>
      </div>
    </div>
  )
}