import { connect } from 'react-redux';
import Movies from './Movies';

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const MoviesContainer = connect (mapStateToProps, mapDispatchToProps) (Movies)

export default MoviesContainer;