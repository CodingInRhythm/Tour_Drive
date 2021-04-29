import MusicPlayer from '../MusicPlayer'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as albumActions from '../../store/album'
import { useEffect } from 'react'
import './AlbumPage.css'
import Follow from '../Follow'
import Support from '../SupportButton'

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
        {album && (
          <>
            <div className="album-left">
              <p className="album-artist">
                <p class="album-name">{album.name}></p>
                <p>
                  by <span className="artist-name">{album.Artist.name}</span>
                </p>
                <Support />
              </p>
              <div className="music-player">
                <MusicPlayer tracks={album.Songs} />
              </div>
            </div>
            <div className="album-center"></div>

            <img
              className="album-art"
              src="https://codinginrhythmbucket.s3.amazonaws.com/near_far_beyond/Cover+Artwork.png"
            />

            <div className="album-right">
              <div>
                <img src={album.Artist.avatarUrl} />
                <Follow />
              </div>
            </div>
          </>
        )}
      </div>
    );
}

export default AlbumPage