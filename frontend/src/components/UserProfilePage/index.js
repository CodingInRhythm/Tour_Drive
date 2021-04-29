import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { csrfFetch } from '../../store/csrf'
import { Link } from 'react-router-dom'
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
            console.log(data)
            setCollection(data.Albums)


        }
        FetchCollection()
    }, [])

    return (
        <>
            <h1>{user.username}</h1>
            <h1>Follows</h1>
            {follows && follows.map((follow => (<Link to="/artists/:id"><img src={follow.avatarUrl} /></Link>)
            ))}


        </>
    )
}

export default UserProfilePage