import { useDispatch, useSelector } from 'react-redux'
import { follow } from '../../store/session'

const Follow = () => {
    const dispatch = useDispatch()
    const userId = useSelector((state) => state.session.user.id)
    const artistId = useSelector((state) => state.album.album.Artist.id)
    console.log(userId, 'FOLLOW COMP')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(follow(userId, artistId))
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Follow</button>
        </form>
    )
}

export default Follow