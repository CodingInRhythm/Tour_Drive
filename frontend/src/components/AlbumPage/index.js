import MusicPlayer from '../MusicPlayer'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as albumActions from '../../store/album'
import { useEffect, useState } from 'react'
import { csrfFetch } from '../../store/csrf'
import './AlbumPage.css'
import Follow from '../Follow'
import Support from '../SupportButton'
import CommentDisplay from '../CommentDisplay'


//Right now I am rendering this page on a page load.  Maybe if I rendered it from a parent component thi would solve my bug?

const AlbumPage = () => {
    //we want to dispatch a thunk action that will fetch the songs and set the store.songs to be those songs
    const { id } = useParams()
    const dispatch = useDispatch()

    const album = useSelector((state) => state.album.album)
    const user = useSelector((state) => state.session.user)
    

    const[isLoaded, setIsLoaded] = useState(false)
    const[follows, setFollows] = useState(false)
    const [supports, setSupports ] = useState(false)

    useEffect(() => {
        'making it?'
        dispatch(albumActions.getAlbum(id));
       setIsLoaded(true)

        
    }, [])

  
  
    return (
      <div className="album-page">
        {album && (
          <>
            <div className="album-left">
              <p className="album-artist">
                <p class="album-name">{album.name}</p>
                <p>
                  by <span className="artist-name">{album.Artist.name}</span>
                </p>
                <Support album={album} user={user}/>
              </p>
              <div className="music-player">
                <MusicPlayer tracks={album.Songs} />
              </div>
            </div>
            <div className="album-center">
              <img className="album-art" src={album.albumArt} />
              <div className="comments-container">
                <CommentDisplay albumId={album.id} />
              </div>
            </div>
            <div className="album-right">
              <div>
                {isLoaded && (
                  <>
                  <img className="artist-pic" src={album.Artist.avatarUrl} />
                  <Follow album={album} user={user}/>
                </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    );
}

export default AlbumPage