import { useDispatch, useSelector } from 'react-redux'
import { follow } from '../../store/session'
import { useState } from 'react'

const Follow = () => {
    const dispatch = useDispatch()
    const userId = useSelector((state) => state.session.user.id)
    const artistId = useSelector((state) => state.album.album.Artist.id)

    const [followed, setFollowed] = useState(false)
    console.log(userId, 'FOLLOW COMP')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(follow(userId, artistId))
        setFollowed(!followed)
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">{followed ? "unfollow" : "follow"} </button>
        </form>
    )
}

export default Follow