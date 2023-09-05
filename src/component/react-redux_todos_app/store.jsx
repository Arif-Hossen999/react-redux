import { applyMiddleware, createStore } from "redux";
import todosReducer from "./services/reducers/todosReducer";
import thunk from "redux-thunk";

// create store
const store = createStore(todosReducer, applyMiddleware(thunk))

export default store
