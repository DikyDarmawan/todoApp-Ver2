import React from 'react';
import './App.css';
import ListItems from './ListItems';
import './bike.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import actionTypes from './redux/actionTypes';
import Todo from './Todo';

library.add(faTrash);
library.add(faPlusCircle);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.getStorage();
  }

  componentDidUpdate() {
    this.setStorage();
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
    // this.props.addItem(this.state);
  }
  deleteItem(key) {
    const filterdItems = this.state.items.filter(item =>
      item.key !== key);
    this.setState({
      items: filterdItems
    })
  }

  // completeTodo = (id) => {
  //   const newTodos = [...this.state.items];
  //   const editedTodo = newTodos.find((todo) => todo.id === id);
  //   editedTodo.completed = !editedTodo.completed;
  //   this.setState({
  //     todos: newTodos,
  //   });
  // };

  getStorage = () => {
     JSON.parse(localStorage.getItem("todos"));
  };

  setStorage = () => {
    localStorage.setItem("todos", JSON.stringify(this.state.items));
  };

  render() {
    console.log(this.props);
    return (
      < div id="App" >
        <header>
          {/* <form id="tambah-agenda" onSubmit={this.addItem}>
            <input type="text" placeholder="Masukkan Agenda"
              value={this.state.currentItem.text}
              onChange={this.handleInput} />
            <button type="submit"> <FontAwesomeIcon className="faicons" icon='plus-circle' /> </button>
          </form> */}
          <Todo />
        </header>

        

        <ListItems 
          items={this.state.items}
          deleteItem={this.deleteItem}>
          </ListItems>
      </ div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.currentItem,
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem : () => dispatch({type : actionTypes.ADD})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
