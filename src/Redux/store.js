import { combineReducers, createStore } from "redux";
import booksReducer from "../library-reducers/books-reducer";
import moviesReducer from "../library-reducers/movies-reducer";
import musicReducer from "../library-reducers/music-reducer";

let reducers = combineReducers( {
    BooksStore: booksReducer,
    MoviesStore: moviesReducer,
    MusicStore: musicReducer,
});

let store = createStore(reducers, (localStorage['data']) ? JSON.parse(localStorage['data']) : {},);

store.subscribe( () => {
    localStorage['data'] = JSON.stringify(store.getState())
})

window.store = store;

export default store;