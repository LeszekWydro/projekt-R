import shortid from 'shortid';
import createActionName from '../utils/createActionName';

// selectors
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getAllLists = (state) => state.lists;

// actions
const ADD_LIST = createActionName('ADD_LIST');

// action creators
export const addList = (payload) => ({ type: ADD_LIST, payload });
const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, { id: shortid(), ...action.payload }];
    default:
      return statePart;
  };
};

export default listsReducer;