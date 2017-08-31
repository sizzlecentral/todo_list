import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ListItem = props => (
  <div>
    <li>{props.doThis}</li>
  </div>
);

export default ListItem;
