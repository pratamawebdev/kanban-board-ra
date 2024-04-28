import {
  CREATE_TODO_FAILURE,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  GET_LIST_OF_TODOS_FAILURE,
  GET_LIST_OF_TODOS_REQUEST,
  GET_LIST_OF_TODOS_SUCCESS,
} from "../actions/todosActionsTypes";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO_REQUEST:
    case GET_LIST_OF_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case GET_LIST_OF_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
        error: null,
      };
    case CREATE_TODO_FAILURE:
    case GET_LIST_OF_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todosReducer;
