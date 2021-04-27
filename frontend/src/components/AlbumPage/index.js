import MusicPlayer from '../MusicPlayer'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as albumActions from '../../store/album'
import { useEffect } from 'react'

//Right now I am rendering this page on a page load.  Maybe if I rendered it from a parent component thi would solve my bug?

const AlbumPage = () => {
    //we want to dispatch a thunk action that will fetch the songs and set the store.songs to be those songs
    const { id } = useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        'making it?'
        dispatch(albumActions.getAlbum(id));
    }, [dispatch, id])
    
   const album = useSelector((state) => state.album.album)
   
   console.log(album)
    return (
      <>
        
        {album && <MusicPlayer tracks={album.Songs} />}
      </>
    );
}

export default AlbumPage