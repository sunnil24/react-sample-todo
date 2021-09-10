import { FETCH_TODOS } from './actionsTypes';

export default (state, action) => {
  switch (action.type) {
    case FETCH_TODOS: {
      const {
        payload: { data }
      } = action;
      return {
        todos: data
      };
    }
    default: {
      return state;
    }
  }
};
