import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import Card from './card'

export default class cards extends Component{
  
  render(){
    return(
      <React.StrictMode >
        <div class = "founds-container">
          <ul className="founds-container">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          </ul>
          
        </div>
        </React.StrictMode>
       
     
              
      );
    }
  }