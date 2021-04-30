import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session'
import { Link } from 'react-router-dom'

const ProfileButton = ({user}) => {
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false)

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true)
    }

    useEffect(() => {
        if(!showMenu) return;
        
        const closeMenu = () => {
            setShowMenu(false)
        }
        document.addEventListener("click", closeMenu)
        return () => document.removeEventListener("click", closeMenu);
        }, [showMenu])
    
    const logout = (e) => {
        e.preventDefault()

        dispatch(sessionActions.logout());
    }
    
    return (
      <div>
        <button onClick={openMenu}>
          <i className="fas fa-record-vinyl"></i>
        </button>
        {showMenu && (
          <ul>
            <Link to='/user'>
              <li>{user.username}</li>
            </Link>
            <li>{user.email}</li>
            <button onClick={logout}>
              <Link to="/">Log Out</Link>
            </button>
          </ul>
        )}
      </div>
    );
}

export default ProfileButton