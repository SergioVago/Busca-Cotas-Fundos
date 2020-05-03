import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import Card from '../Card'

export default class cards extends Component{
  
  render(){
    return(
      <React.StrictMode >
        <div className = "founds-container">
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