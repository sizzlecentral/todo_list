import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';

class MyList extends Component {

  constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: '',
    }
  }

  newItemChange (e) {
    this.setState({
      newItem: e.target.value
    });
  }

  addItem (e) {
    e.preventDefault();
    const toDos = this.state.toDoItemArray;
    toDos.push(this.state.newItem);
    this.setState({toDoItemArray: toDos, newItem: ''});
  }

  clearList (e) {
    this.setState({
      toDoItemArray: []
    });
  }

  render() {

    let todoItems = this.state.toDoItemArray.map( (item, index) => (
      <ListItem doThis={item} key={index} />
    ))

    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <form>
          <input type="text"
           placeholder="Type an item here"
           onChange={(e) => this.newItemChange(e)}
           value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
      </div>
    );
  }
}

export default MyList;
