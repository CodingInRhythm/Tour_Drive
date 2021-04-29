import { NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProfileButton from './ProfileButton'
import DemoButton from '../DemoButton'
import './navigation.css'

const Navigation = ({isLoaded}) => {
    const sessionUser = useSelector(state => state.session.user)
    

    let sessionLinks;
    if(sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        )
    } else {
        sessionLinks = (
            <>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>Signup</NavLink>
                <DemoButton />
            </>
        )
    }
   return (
     <ul className="navbar">
       <li>
         <NavLink exact to="/">
           Home
         </NavLink>
         {isLoaded && sessionLinks}
       </li>
     </ul>
   );
}

export default Navigation