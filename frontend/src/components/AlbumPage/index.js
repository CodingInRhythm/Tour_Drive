import MusicPlayer from '../MusicPlayer'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as albumActions from '../../store/album'
import { useEffect } from 'react'
import './AlbumPage.css'
import Follow from '../Follow'

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
  
  
    return (
      <div className="album-page">   
        {album && 
        <>
        <div>
          <img src={album.Artist.avatarUrl}/>
        </div>
        <p className="album-name">{album.name} by {album.Artist.name}</p>
        <div className="music-player"><MusicPlayer tracks={album.Songs} /></div>
        <div className="album-art">
          <img src={album.albumArt} />
        </div>
        <Follow />
        </>
      }
      </div>
    );
}

export default AlbumPage