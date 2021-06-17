import React from 'react';

function Books(props) {
    let title = props.usersData.map((elem, index) => {
        return <div key={elem.id}>
            <p>Название книги: {elem.bookName}</p>
            <p>Автор книги: {elem.bookAuthor}</p>
            <p>Описание книги: {elem.bookDescription}</p>
            <button id={elem.id} onClick={props.delBook}>delete</button>
            <button>edit</button>
        </div>
    })

    return (
        <div>
            <h2>Книги:</h2>
            {title}

            <form>
                <input placeholder="название книги" onChange={props.addBookName} value={props.bookName}/>
                <input  placeholder="автор" onChange={props.addBookAuthor} value={props.bookAuthor}/>
                <textarea  placeholder="описание" onChange={props.addBookDescrioption} value={props.bookDescription}/>
                <input type="submit" value="добавить" onClick={props.addBook}/>
            </form>
        </div>
    )
}
    

export default Books;