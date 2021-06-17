import { combineReducers, createStore } from "redux";
import booksReducer from "../library-reducers/books-reducer";

let reducers = combineReducers( {
    BooksStore: booksReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;