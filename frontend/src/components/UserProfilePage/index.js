// import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
const UserProfilePage = () => {
    const user = useSelector((state) => state.session.user)
    console.log(user)
    return (
        <>
            <h1>{user.username}</h1>
        </>
    )
}

export default UserProfilePage