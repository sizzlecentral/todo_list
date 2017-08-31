import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ListItem extends Component {
  render() {
    return (
      <div>
        <li>{this.props.doThis}</li>
      </div>
    );
  }
}

export default ListItem;
