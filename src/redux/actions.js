import actionTypes from './actionTypes';

export const addTodo = (currentItem) => {
    return {
        type: actionTypes.ADD,
        payload: currentItem
    }
}