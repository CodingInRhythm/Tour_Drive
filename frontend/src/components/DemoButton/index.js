import { login } from '../../store/session'
import { useDispatch } from 'react-redux'

const DemoButton = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        return dispatch(login({credential: 'TestUser', password: 'password'}))
    }
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Login as demo user</button>
      </form>
    );
}

export default DemoButton