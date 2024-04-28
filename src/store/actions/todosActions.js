import getData from "../../api/getData";
import postData from "../../api/postData";
import {
  CREATE_TODO_FAILURE,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  GET_LIST_OF_TODOS_FAILURE,
  GET_LIST_OF_TODOS_REQUEST,
  GET_LIST_OF_TODOS_SUCCESS,
} from "./todosActionsTypes";

export const createTodo = (todoData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CREATE_TODO_REQUEST });
      await postData("/todos", todoData);
      dispatch({ type: CREATE_TODO_SUCCESS });
    } catch (error) {
      dispatch({ type: CREATE_TODO_FAILURE, payload: error.message });
    }
  };
};

export const getListOfTodos = () => {
  return async (dispatch) => {
    dispatch({ type: GET_LIST_OF_TODOS_REQUEST });
    try {
      const response = await getData("/todos");
      const todosWithItems = [];
      for (const todo of response.data) {
        const itemsResponse = await getData(`/todos/${todo.id}/items`);
        if (itemsResponse.data.length > 0) {
          todosWithItems.push({ ...todo, items: itemsResponse.data });
        }
      }
      dispatch({
        type: GET_LIST_OF_TODOS_SUCCESS,
        payload: {
          data: todosWithItems,
          status: response.status,
        },
      });
      console.log("tes redux", todosWithItems);
    } catch (error) {
      dispatch({ type: GET_LIST_OF_TODOS_FAILURE, payload: error.message });
    }
  };
};
