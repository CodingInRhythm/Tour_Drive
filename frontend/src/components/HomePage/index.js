import { useEffect, useState } from 'react'
import { csrfFetch } from '../../store/csrf'
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {

    const [albumList, setAlbumList] = useState([])

 
    useEffect(() => {


        const fetchAlbums = async () => {
            const albumJSON = await csrfFetch(`/api/albums`)
            const albums = await albumJSON.json()
            setAlbumList(albums)
            }
      fetchAlbums()
    }, [])
    
    return (
      <>

        <div className="album-container">
          {albumList.length &&
            albumList.map((album) => (
              <Link to={`/albums/${album.id}`}>
                <img className="home-page-img"alt="Album cover" src={album.albumArt} height="275" width="275"/>
              </Link>
            ))}
        </div>
      </>
    );
}

export default HomePage