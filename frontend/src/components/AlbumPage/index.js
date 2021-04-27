import MusicPlayer from '../MusicPlayer'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as albumActions from '../../store/album'


const AlbumPage = () => {
    //we want to dispatch a thunk action that will fetch the songs and set the store.songs to be those songs
    const { id } = useParams()
    const dispatch = useDispatch()

    dispatch(albumActions.setAlbum())
    console.log(id)
    return(
        <>
            <p>YES</p>
            <h1>RENDER?</h1>
            <MusicPlayer />
        </>
    )
}

export default AlbumPage