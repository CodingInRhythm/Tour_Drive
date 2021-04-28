import { useSelector, useDispatch } from 'react-redux'
import { support } from "../../store/session";
const SupportButton = () => {
    const dispatch = useDispatch()
    const userId = useSelector((state) => state.session.user.id)
    const albumId = useSelector((state) => state.album.album.id)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(support(userId, albumId))
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type='submit'>SUPPORT</button>
        </form>
    )
}

export default SupportButton