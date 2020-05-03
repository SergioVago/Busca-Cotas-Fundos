import React, {Component} from 'react'
import api from './services/api'
import { FaStar} from 'react-icons/fa'
import './card.css'

export default class card extends Component{

   handleFavorite = () => {
    console.log("Favorite activete");
  }
  
  render(){
    const founds = {
      nome : "Cota 1",
      data : "03/05/2020",
      cota : 1.005,
      cnpj : "24.018977/0001-02"
    }
    return(
        <div className="founds-container">
        <ul>
            <li className="founds-container">
            <div className = "founds-container-header">
              <strong> {founds.nome}</strong>
              
              <button type="button">
                <FaStar size={30} color="#CFCFCF"/>
              </button>
            
              </div>

            <p>  Nome: {founds.nome}</p>
            <p> Cota: {founds.cota}</p>
            
            <p>Data: {founds.data}</p>
            <p>CNPJ: {founds.cnpj}</p>

            </li>
          </ul>
        </div>

    );
  }


  }