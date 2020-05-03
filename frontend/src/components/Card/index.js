import React, {Component} from 'react'
import { FaStar} from 'react-icons/fa'
import './index.css'

export default class card extends Component{

   handleFavorite (){
    console.log("Favorite activeted");
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
              
              <button onClick = {this.handleFavorite} type="button">
                <FaStar size={30} color="#CFCFCF"/>
              </button>
            
              </div>
            <div className = "founds-container-content">
              <p>  Nome: {founds.nome}</p>
              <p> Cota: {founds.cota}</p>
              
              <p>Data: {founds.data}</p>
              <p>CNPJ: {founds.cnpj}</p>
            </div>
           

            </li>
          </ul>
        </div>

    );
  }


  }