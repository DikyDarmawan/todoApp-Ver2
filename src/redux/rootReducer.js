import actionTypes from './actionTypes';

const globalState = {
    items: [],
    currentItem: {
        text: '',
        key: ''
      }
}

const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            const newItem = state.currentItem;
            if (newItem.text !== "") {
              const newItems = [...state.items, newItem];
              this.setState({
                items: newItems,
                currentItem: {
                  text: '',
                  key: ''
                }
              })
            }
            return {
              ...state,
              currentItem : state.currentItem
            }
        
        default:
            return state
    }
}

export default rootReducer;