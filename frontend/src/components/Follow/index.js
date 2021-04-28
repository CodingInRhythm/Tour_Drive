import { useDispatch } from 'react-redux'
import { follow } from '../../store/session'

const Follow = () => {
    const dispatch = useDispatch()
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