import { connect } from 'react-redux';
import { addBook, addBookAuthor, addBookName, addBookDescrioption, delBook } from '../library-reducers/books-reducer';
import Books from './Books';

let BookContainer = (props) => {
    return <Books {...props}/>
}

const mapStateToProps = (state) => {
    return {
        bookName: state.BooksStore.bookName,
        bookAuthor: state.BooksStore.bookAuthor,
        bookDescription: state.BooksStore.bookDescription,
        usersData: state.BooksStore.usersData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addBook: (event) => {
            event.preventDefault();
            dispatch(addBook());
        },
        addBookName: (event) => {
            let value = event.target.value;
            dispatch(addBookName(value));
        },
        addBookAuthor: (event) => {
            let value = event.target.value;
            dispatch(addBookAuthor(value));
        },
        addBookDescrioption: (event) => {
            let value = event.target.value;
            dispatch(addBookDescrioption(value))
        },
        delBook: (event) => {
            let id = event.target.id
            dispatch(delBook(id));
        }
    }
}

const BooksContainer = connect (mapStateToProps, mapDispatchToProps) (BookContainer)

export default BooksContainer;