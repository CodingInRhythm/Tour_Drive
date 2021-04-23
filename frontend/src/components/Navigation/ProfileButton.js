import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session'

const ProfileButton = ({user}) => {
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false)

    return (
      <div>
        <button onClick={setShowMenu(true)}>
          <i className="fas fa-record-vinyl"></i>
        </button>
        {showMenu && (
            <ul>
                <li>{user.name}</li>
                <li>{user.email}</li>
                <button onClick={dispatch(sessionActions.logout)}></button>
            </ul>
        )}

      </div>
    );
}

export default ProfileButton