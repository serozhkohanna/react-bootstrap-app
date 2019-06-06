import { ADD_MESSAGE } from '../types/types';

const initialState = {
  message: ['hello']
};

export default function chat (state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return {...state, message: [...state.message, action.post]}
    default: return state;
  }
}
