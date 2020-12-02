const globalState = {
    todos: []
}

const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
          console.log("Redux Store",state.todos);
            return {
              ...state,
              todos : [...state.todos, action.payload],
              
            };
        
        case 'DELETE_TODO':
          return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload)
          };
        
        default:
            return state
    }
}

export default rootReducer;