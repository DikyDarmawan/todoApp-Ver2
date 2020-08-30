import React from 'react';
import './App.css';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  }
  deleteItem(key) {
    const filterdItems = this.state.items.filter(item =>
      item.key !== key);
    this.setState({
      items: filterdItems
    })
  }

  render() {
    return (
      < div className="App" >
        <header>
          <form id="tambah-agenda" onSubmit={this.addItem}>
            <input type="text" placeholder="Masukkan Agenda"
              value={this.state.currentItem.text}
              onChange={this.handleInput} />
            <button type="submit"> <FontAwesomeIcon className="faicons" icon='plus-circle' /> </button>
          </form>
        </header>
        <ListItems items={this.state.items}
          deleteItem={this.deleteItem}></ListItems>
      </ div>
    );
  }
}

export default App;
