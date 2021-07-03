import { connect } from 'react-redux';
import { addMovie, addMovieActors, addMovieName, addMovieTime, addMovieDescription, 
         delMovie, setIsMovieEdit, saveEdit, onMovieNameChangeInput, onActorListChangeInput,
         onMovieTimeChangeInput, onMovieDescriptionChangeInput } from '../library-reducers/movies-reducer';
import Movies from './Movies';

let MovieContainer = (props) => {
    return <Movies {...props}/>
}

const mapStateToProps = (state) => {
    return {
        usersMoviesData: state.MoviesStore.usersMoviesData,
        movieName: state.MoviesStore.movieName,
        actorsList: state.MoviesStore.actorsList,
        movieTime: state.MoviesStore.movieTime,
        movieDescrition: state.MoviesStore.movieDescrition,
        movieNameChangeInput: state.MoviesStore.movieNameChangeInput,
        actorListChangeInput: state.MoviesStore.actorListChangeInput,
        movieTimeChangeInput: state.MoviesStore.movieTimeChangeInput,
        movieDescriptionChangeInput: state.MoviesStore.movieDescriptionChangeInput,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMovie: (event) => {
            event.preventDefault();
            dispatch(addMovie());
        },
        addMovieName: (event) => {
            let value = event.target.value;
            dispatch(addMovieName(value));
        },
        addMovieActors: (event) => {
            let value = event.target.value;
            dispatch(addMovieActors(value));
        }, 
        addMovieTime: (event) => {
            let value = event.target.value;
            dispatch(addMovieTime(value));
        }, 
        addMovieDescription: (event) => {
            let value = event.target.value;
            dispatch(addMovieDescription(value));
        }, 
        delMovie: (event) => {
            let id = event.target.id;
            dispatch(delMovie(id));
        }, 
        setIsMovieEdit: (event) => {
            let id = event.target.id;
            let index = event.target.getAttribute('data-index');
            dispatch(setIsMovieEdit(id, index));
        },
        saveEdit: (event) => {
            let id = event.target.id;
            let index = event.target.getAttribute('data-index');
            dispatch(saveEdit(id, index));            
        },
        onMovieNameChangeInput: (event) => {
            let value = event.target.value;
            dispatch(onMovieNameChangeInput(value));
        },
        onActorListChangeInput: (event) => {
            let value = event.target.value;
            dispatch(onActorListChangeInput(value));
        }, 
        onMovieTimeChangeInput: (event) => {
            let value = event.target.value;
            dispatch(onMovieTimeChangeInput(value));
        },
        onMovieDescriptionChangeInput: (event) => {
            let value = event.target.value;
            dispatch(onMovieDescriptionChangeInput(value));
        }
    }
}

const MoviesContainer = connect (mapStateToProps, mapDispatchToProps) (MovieContainer)

export default MoviesContainer;