import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { csrfFetch } from '../../store/csrf'
import { Link } from 'react-router-dom'
import AlbumCard from '../AlbumCard'
import './userProfile.css'
const UserProfilePage = () => {
    const user = useSelector((state) => state.session.user)
    const [follows, setFollows] = useState([])
    const [collection, setCollection] = useState([])
    const id = user.id
  
    useEffect(() => {

        async function FetchFollows() {
        const res =  await fetch (`/api/follows/${id}`)
        
        let data = await res.json()
       
        setFollows(data.Artists)
        
    }
    FetchFollows()
    },[])

   

    useEffect(() => {
        async function FetchCollection() {
            const res = await fetch (`/api/collection/${id}`)
            let data = await res.json()
            console.log(data.Albums)
            setCollection(data.Albums)
            
            
        }
        FetchCollection()
    }, [])
    
    console.log(collection)
    return (
        <>
            <h1>{user.username}</h1>
            <h1>Follows</h1>
            {follows && follows.map((follow => (<Link to="/artists/:id"><img className="artist-images" src={follow.avatarUrl} /></Link>)
            ))}
            <h1>Collections</h1>
            {collection && (
                <div className='collection-container'>
                {collection.map((album) => (<AlbumCard album={album} />))}
                </div>
            )}
        </> 
    )
}

export default UserProfilePage