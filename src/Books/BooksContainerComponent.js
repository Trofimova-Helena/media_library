import { connect } from 'react-redux';
import { addBook, addBookAuthor, addBookName, addBookDescrioption, delBook, setIsEdit, 
    saveEdit, onChangeBookName, onChangeAuthor, onChangeDescription} from '../library-reducers/books-reducer';
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
        bookNameChangeInput: state.BooksStore.bookNameChangeInput,
        bookAuthorChangeInput:  state.BooksStore.bookAuthorChangeInput,
        bookDescriptChangeInput: state.BooksStore.bookDescriptChangeInput,
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
            console.log(event.target.id)
            let id = event.target.id
            dispatch(delBook(id));
        },
        setIsEdit: (event) => {
            let id = event.target.id;
            let index = event.target.getAttribute('data-index');
            dispatch(setIsEdit(id, index));
            
        },
        saveEdit: (event) => {
            let id = event.target.id;
            let index = event.target.getAttribute('data-index');
            dispatch(saveEdit(id, index));
        },
        onChangeBookName: (event) => {
            let text = event.target.value;
            dispatch(onChangeBookName(text));
        }, 
        onChangeAuthor: (event) => {
            let text = event.target.value;
            dispatch(onChangeAuthor(text));
        }, 
        onChangeDescription: (event) => {
            let text = event.target.value;
            dispatch(onChangeDescription(text));
        },
    }
}

const BooksContainer = connect (mapStateToProps, mapDispatchToProps) (BookContainer)

export default BooksContainer;