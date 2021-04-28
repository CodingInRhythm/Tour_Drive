// import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { csrfFetch } from '../../store/csrf'
const UserProfilePage = () => {
    const user = useSelector((state) => state.session.user)
    const [follows, setFollows] = useState([])
    const id = user.id
    useEffect(() => {

        async function FetchFollows() {
        const res =  await fetch (`/api/follows/${id}`)
        console.log(res)
        const data = await res.json()
        console.log(data)
        }
        FetchFollows()
    },[])
    return (
        <>
            <h1>{user.username}</h1>

        </>
    )
}

export default UserProfilePage