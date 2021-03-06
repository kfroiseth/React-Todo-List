import React, { Component } from "react";
import ToDoItems from "./ToDoItems";
import "./ToDoList.css";

class ToDoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e){
    var itemArray = this.state.items;

    if(this._inputElement.value !== ""){
      itemArray.push({
        text: this._inputElement.value,
        key: Date.now()
      });

      this.setState({
        items: itemArray
      });

      this._inputElement.value = "";
    }
    console.log(itemArray);
    //prevent page from reloading and clearing everything out by default
    e.preventDefault();
  }

  deleteItem(key){
    var filteredItems = this.state.items.filter(function(item){
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });

  }


  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
                  placeholder="Enter a task">
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
        <ToDoItems entries={this.state.items}
                   delete={this.deleteItem}/>
      </div>
    );
  }
}

export default ToDoList;
