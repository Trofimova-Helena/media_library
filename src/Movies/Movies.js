import React from 'react';
import styles from './../cssStyles/Movies.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash, faSave } from '@fortawesome/free-solid-svg-icons';

function Movies(props) {
    let movies = props.usersMoviesData.map((elem, index) => {
        if (elem.isEdit) {
            return <div key={elem.id} className={styles.movieList}>
                <p><span>Название фильма: </span><input value={props.movieNameChangeInput} onChange={props.onMovieNameChangeInput} /> </p>
                <p><span>Актеры: </span><textarea value={props.actorListChangeInput} onChange={props.onActorListChangeInput} /> </p>
                <p><span>Длительность фильма: </span><input value={props.movieTimeChangeInput} onChange={props.onMovieTimeChangeInput} /> </p>
                <p><span>Описание фильма: </span><textarea value={props.movieDescriptionChangeInput} onChange={props.onMovieDescriptionChangeInput} /> </p>
                <button id={elem.id} onClick={props.delMovie} className={styles.Btn}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
                <button id={elem.id} data-index={index} onClick={props.saveEdit} className={styles.Btn}>
                    <FontAwesomeIcon icon={faSave} />
                </button>
            </div>
        } else {
            return <div key={elem.id} className={styles.movieList}>
                <p><span>Название фильма: </span>{elem.movieName}</p>
                <p><span>Список актеров: </span>{elem.actorsList}</p>
                <p><span>Длительность фильма: </span>{elem.movieTime}</p>
                <p><span>Описание: </span>{elem.movieDescrition}</p>
                <button id={elem.id} onClick={props.delMovie} className={styles.Btn}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
                <button id={elem.id} onClick={props.setIsMovieEdit} data-index={index} className={styles.Btn}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                </button>
            </div>
        }
    })

    return (
        <div className={styles.movieMainDiv}>
            <h2>Фильмы:</h2>

            <div className={styles.divForListForm}>
                <div>
                    {movies}
                </div>

                <div className={styles.formDivMovie}>
                    <form>
                        <h4>Добавьте новый фильм:</h4>
                        <div className={styles.inputName}>
                            <input placeholder="название фильма" value={props.movieName} onChange={props.addMovieName} />
                        </div>

                        <div className={styles.inputActors}>
                            <textarea placeholder="актеры" value={props.actorsList} onChange={props.addMovieActors} />
                        </div>

                        <div className={styles.inputTime}>
                            <input placeholder="длительность" value={props.movieTime} onChange={props.addMovieTime} />
                        </div>

                        <div className={styles.inputDescription}>
                            <textarea placeholder="описание" value={props.movieDescrition} onChange={props.addMovieDescription} />
                        </div>

                        <input type="submit" value="добавить" onClick={props.addMovie} className={styles.BtnAdd}/>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Movies;