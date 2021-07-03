import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import BooksContainer from './Books/BooksContainerComponent';
import MoviesContainer from './Movies/MoviesContainerComponent';
import MusicContainer from './Music/MusicContainerComponent';
import Navbar from './Navbar/Navbar';
import styles from './cssStyles/AppStyle.module.css'

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <div className={styles.forNavbar}>
          <Navbar />
        </div>
        
        <div className={styles.content}>
          <Route path="/books" render={() => <BooksContainer />} />
          <Route path="/movies" render={() => <MoviesContainer />} />
          <Route path="/musics" render={() => <MusicContainer />} />
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
