import React from 'react';
import styles from './../cssStyles/Books.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash, faSave } from '@fortawesome/free-solid-svg-icons';

function Books(props) {

    let title = props.usersData.map((elem, index) => {
        if (elem.isEdit) {
            return <div key={elem.id} className={styles.bookList}>
                <p><span>Название книги: </span><input value={props.bookNameChangeInput} onChange={props.onChangeBookName}/> </p>
                <p><span>Автор книги: </span><input value={props.bookAuthorChangeInput} onChange={props.onChangeAuthor}/> </p>
                <p><span>Описание книги: </span><textarea value={props.bookDescriptChangeInput} onChange={props.onChangeDescription}/> </p>
                <button id={elem.id} onClick={props.delBook} className={styles.Btn}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <button onClick={props.saveEdit} id={elem.id} data-index={index} className={styles.Btn}>
                    <FontAwesomeIcon icon={faSave} />
                </button>
            </div>
        } else {
            return <div key={elem.id} className={styles.bookList}>
                <p><span>Название книги: </span>{elem.bookName}</p>
                <p><span>Автор книги: </span>{elem.bookAuthor}</p>
                <p><span>Описание книги: </span>{elem.bookDescription}</p>
                <button id={elem.id} onClick={props.delBook} className={styles.Btn}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
                <button onClick={props.setIsEdit} id={elem.id} data-index={index} className={styles.Btn}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                </button>
            </div>
        }
    })

    return (
        <div className={styles.bookMainDiv}>
            <h2>Книги:</h2>
            <div className={styles.formAndTitle}>
                <div className={styles.title}>
                    {title}
                </div>
                
            <div className={styles.formDiv}>
                <form>
                    <h4>Добавьте новую книгу:</h4>
                    <div className={styles.inpName}>
                        <input placeholder="название книги" onChange={props.addBookName} value={props.bookName} />
                    </div>
                    <div className={styles.inpAuthor}>
                        <input placeholder="автор" onChange={props.addBookAuthor} value={props.bookAuthor} />
                    </div>
                    <div  className={styles.inpDescription}>
                        <textarea placeholder="описание" onChange={props.addBookDescrioption} value={props.bookDescription} />
                    </div>
                    <div>
                        <input type="submit" value="добавить" onClick={props.addBook} className={styles.BtnAdd}/>
                    </div>
                    
                </form>
            </div>

            </div>

        </div>
    )
}


export default Books;