import axios from "axios";
// import constants
import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "../constants/todosConstant";

// create action
export const getAllTodos = () => async (dispatch) => {
  dispatch({
    type: GET_TODOS_REQUEST,
  });
  try {
    // call api with axios
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({
      type: GET_TODOS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TODOS_FAILED,
      payload: error.message,
    });
  }
};
