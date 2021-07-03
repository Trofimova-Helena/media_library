import React from 'react';
import styles from './../cssStyles/Music.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash, faSave } from '@fortawesome/free-solid-svg-icons';

function Music(props) {
    let music = props.usersMusicData.map((elem, index) => {
        if (elem.isEdit) {
            return <div key={elem.id} className={styles.musicList}>
                <p><span>Название трека: </span><input value={props.musicNameChangeInput} onChange={props.onMusicNameChangeInput}/> </p>
                <p><span>Автор: </span><input value={props.musicAuthorChangeInput} onChange={props.onMusicAuthorChangeInput}/> </p>
                <p><span>Длительность трека: </span><input value={props.musicTimeChangeInput} onChange={props.onMusicTimeChangeInput}/> </p>
                <p><span>Описание трека: </span><textarea value={props.musicDescriptionChangeInput} onChange={props.onMusicDescriptionChangeInput}/> </p>
                <button id={elem.id} onClick={props.delMusic} className={styles.Btn}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <button id={elem.id} data-index={index} onClick={props.saveMusicEdit} className={styles.Btn}>
                    <FontAwesomeIcon icon={faSave} />
                </button>
            </div>
        } else {
            return <div key={elem.id} className={styles.musicList}>
                <p><span>Название трека: </span>{elem.musicName}</p>
                <p><span>Автор: </span>{elem.musicAuthor}</p>
                <p><span>Длительность трека: </span>{elem.musicTime}</p>
                <p><span>Описание: </span>{elem.musicDescrition}</p>
                <button id={elem.id} onClick={props.delMusic} className={styles.Btn}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <button id={elem.id} onClick={props.setIsMusicEdit} data-index={index} className={styles.Btn}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                </button>
            </div>           
        }
    })

    return (
        <div className={styles.musicMainDiv}>
            <h2>Музыка:</h2>

            <div className={styles.musicFormTitle}>
                <div>
                    {music}
                </div>
                
                <div className={styles.musicformDiv}>
                    <form>
                        <h4>Добавьте новый трек:</h4>
                        <div className={styles.musicName}>
                            <input placeholder="название трека" value={props.musicName} onChange={props.addMusicName}/>
                        </div>
                        <div className={styles.musicAuthorInp}>
                            <input placeholder="имя автора" value={props.musicAuthor} onChange={props.addMusicAuthor} />
                        </div>

                        <div className={styles.musicTimeInput}>
                            <input placeholder="длительность" value={props.musicTime} onChange={props.addMusicTime}/>
                        </div>
                        
                        <div className={styles.descriptionInput}>
                            <textarea placeholder="описание" value={props.musicDescrition} onChange={props.addMusicDescription} />
                        </div>
                        
                        <input type="submit" value="добавить" onClick={props.addMusic} className={styles.BtnAdd}/>
                    </form>
                </div>
            </div>


        </div>
    )
}
    

export default Music;