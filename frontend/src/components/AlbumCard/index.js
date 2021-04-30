import { Link } from 'react-router-dom'
import './AlbumCard.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { csrfFetch } from '../../store/csrf'


const AlbumCard = ({album}) => {
    console.log(album)

    const [comment, setComment ] = useState('')
    const userId = useSelector((state) => state.session.user.id);
    const albumId = album.id

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await csrfFetch('/api/comments', {
            method: 'POST',

            body: JSON.stringify({comment, userId, albumId})
        })
        const data = await res.json()
        console.log(data)
    }
    return (
        <>
            <div className="album-card-container">
                <Link to={`/albums/${album.id}`}>
                    <img className="collection-images" src={album.albumArt}></img>
                </Link>
                <h3>{album.name}</h3>
                <h2>by {album.id}</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text-area'
                        value={comment}
                        placeholder='comment will appear on artists page'
                        onChange={(e) => setComment(e.target.value)}    
                    >
                    </input>
                    <button type="submit">Comment</button>

                </form>
            </div>
        </>
   )
}

export default AlbumCard