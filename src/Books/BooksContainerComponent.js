import { connect } from 'react-redux';
import Books from './Books';

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const BooksContainer = connect (mapStateToProps, mapDispatchToProps) (Books)

export default BooksContainer;