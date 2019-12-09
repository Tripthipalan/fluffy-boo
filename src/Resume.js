import React from 'react';
import cv from "./image/bachamma.svg";
import './App.css';

function Resume() {
  return (
    <div  className= 'divresume'>
      <img src={cv}className="myresume" alt="Resume"/>
    </div>
  );
}

export default Resume;
