import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import Card from '../Card'
import './styles.css'

export default class cards extends Component{
  
  render(){
    return(
      <React.StrictMode >
        <div className = "founds-container">
          <ul>
            <li>
            <Card/>
            </li>
            <li>
            <Card/>
            </li>
            <li>
            <Card/>
            </li>
            <li>
            <Card/>
            </li>
            <li>
            <Card/>
            </li>
            <li>
            <Card/>
            </li>
            <li>
            <Card/>
            </li>
            <li>
            <Card/>
            </li>
            <li>
            <Card/>
            </li>
            <li>
            <Card/>
            </li>
            <li>
            <Card/>
            </li>
            <li>
            <Card/>
            </li>
          
          </ul>
          
        </div>
        </React.StrictMode>
       
     
              
      );
    }
  }