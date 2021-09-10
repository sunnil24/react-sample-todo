import { FETCH_TODOS } from './actionsTypes';
export const fetchToDos = async (dispatch, data) => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
  const respData = await resp.json();
  dispatch({
    type: FETCH_TODOS,
    payload: {
      data: respData
    }
  });
};

export const updateToDos = async (dispatch, data) => {
  dispatch({
    type: FETCH_TODOS,
    payload: {
      data
    }
  });
};
