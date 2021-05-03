import { NavLink} from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import ProfileButton from './ProfileButton'
import DemoButton from '../DemoButton'
import LogInModal from './LogInModal'
import './navigation.css'


const Navigation = ({isLoaded}) => {
    const sessionUser = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false)


  const openModal = () => {
    setShowModal((prev) => !prev)
  }

    let sessionLinks;


    if(sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        )
    } else {
        sessionLinks = (
          <>
          {/* <button onClick={openModal}>Log-In</button> */}
            <NavLink to="/login">Login</NavLink>
            {/* {showModal && 
            <LogInModal showModal={showModal} setShowModal={setShowModal}></LogInModal>
            } */}
            <NavLink to="/signup">Signup</NavLink>
            <DemoButton className="demo-button"/>
          </>
        );
    }
   return (
     <div className="navbar">
       <div className="tour-drive-logo">
         <div className="logo-text">
           <span className="tour-drive-text">Tour Drive</span>
           <span>Get your favorite artist on the road!</span>
         </div>
       <NavLink className="home-button" exact to="/">
         <i className="fas fa-shuttle-van fa-5X"></i>
       </NavLink>
       </div>
       {isLoaded && sessionLinks}
     </div>
   );
}

export default Navigation