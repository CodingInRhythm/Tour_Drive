import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session'
import { Link } from 'react-router-dom'
import './ProfileButton.css'
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
      <>
        <div className="navbar-right">
          <p>Welcome to Tour Drive, {user.username}!</p>
          <button onClick={openMenu}>
            <i className="fas fa-record-vinyl"></i>
          </button>
          {showMenu && (
            <ul className="show-menu">
              <Link className="show-menu-item" to="/user">
                <li>{user.username}</li>
              </Link>
              <li className="show-menu-item">{user.email}</li>
              <button className="show-menu-item" onClick={logout}>
                <Link to="/">Log Out</Link>
              </button>
            </ul>
          )}
        </div>
      </>
    );
}

export default ProfileButton