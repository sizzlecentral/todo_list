import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';

const ToDoList = props => (
  <ul>
    {props.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={index} />
    ))}
  </ul>
)

export default ToDoList;
