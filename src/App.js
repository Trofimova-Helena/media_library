import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import BooksContainer from './Books/BooksContainerComponent';
import MoviesContainer from './Movies/MoviesContainerComponent';
import MusicContainer from './Music/MusicContainerComponent';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div>
        <Route path="/books" render={() => <BooksContainer/>}/>
        <Route path="/movies" render={() => <MoviesContainer/>}/>
        <Route path="/musics" render={() => <MusicContainer/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
