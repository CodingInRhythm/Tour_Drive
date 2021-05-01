import { login } from '../../store/session'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

const DemoButton = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        return dispatch(login({credential: 'TestUser', password: 'password'}))
    }
    return (
    
        <form onSubmit={handleSubmit}>
          <button className="demo-user home-button" type="submit">
            Login as demo user
          </button>
        </form>
    
    );
}

export default DemoButton