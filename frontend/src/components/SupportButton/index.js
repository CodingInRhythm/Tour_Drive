import { useSelector, useDispatch } from 'react-redux'
import { support } from "../../store/session";
import { useState } from 'react'
const SupportButton = () => {
    const dispatch = useDispatch()
    const userId = useSelector((state) => state.session.user.id)
    const albumId = useSelector((state) => state.album.album.id)

    const [supported, setSupported] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(support(userId, albumId))
        setSupported(true)
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type='submit'>{supported ? 'Thanks for supporting' : 'Support now!'} </button>
        </form>
    )
}

export default SupportButton