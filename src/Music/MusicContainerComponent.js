import { connect } from 'react-redux';
import { addMusic, addMusicAuthor, addMusicName, addMusicTime, addMusicDescription, delMusic,
         setIsMusicEdit, saveMusicEdit, onMusicNameChangeInput, onMusicAuthorChangeInput, 
         onMusicTimeChangeInput, onMusicDescriptionChangeInput } from '../library-reducers/music-reducer';
import Music from './Music';

let MusicCont = (props) => {
    return <Music {...props} />
}

const mapStateToProps = (state) => {
    return {
        usersMusicData: state.MusicStore.usersMusicData,
        musicName: state.MusicStore.musicName,
        musicAuthor: state.MusicStore.musicAuthor,
        musicTime: state.MusicStore.musicTime,
        musicDescrition: state.MusicStore.musicDescrition,
        musicNameChangeInput: state.MusicStore.musicNameChangeInput,
        musicAuthorChangeInput: state.MusicStore.musicAuthorChangeInput,
        musicTimeChangeInput: state.MusicStore.musicTimeChangeInput,
        musicDescriptionChangeInput: state.MusicStore.musicDescriptionChangeInput,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMusic: (event) => {
            event.preventDefault();
            dispatch(addMusic());
        },
        addMusicName: (event) => {
            let value = event.target.value;
            dispatch(addMusicName(value));
        },
        addMusicAuthor: (event) => {
            let value = event.target.value;
            dispatch(addMusicAuthor(value));
        }, 
        addMusicTime: (event) => {
            let value = event.target.value;
            dispatch(addMusicTime(value));
        }, 
        addMusicDescription: (event) => {
            let value = event.target.value;
            dispatch(addMusicDescription(value));
        }, 
        delMusic: (event) => {
            let id = event.target.id;
            dispatch(delMusic(id));
        }, 
        setIsMusicEdit: (event) => {
            let id = event.target.id;
            let index = event.target.getAttribute('data-index');
            dispatch(setIsMusicEdit(id, index));
        }, 
        saveMusicEdit: (event) => {
            let id = event.target.id;
            let index = event.target.getAttribute('data-index');
            dispatch(saveMusicEdit(id, index));           
        }, 
        onMusicNameChangeInput: (event) => {
            let value = event.target.value;
            dispatch(onMusicNameChangeInput(value));
        }, 
        onMusicAuthorChangeInput: (event) => {
            let value = event.target.value;
            dispatch(onMusicAuthorChangeInput(value));
        }, 
        onMusicTimeChangeInput: (event) => {
            let value = event.target.value;
            dispatch(onMusicTimeChangeInput(value));
        }, 
        onMusicDescriptionChangeInput: (event) => {
            let value = event.target.value;
            dispatch(onMusicDescriptionChangeInput(value));
        }
    }
}

const MusicContainer = connect (mapStateToProps, mapDispatchToProps) (MusicCont);

export default MusicContainer;