import './UserDisplay.css'

const UserDisplay = ({user}) => {
    return (
      <>
        <div className="user-display">
          <div>
            <img src={user.largeImageUrl} />
          </div>
          <h1>{user.username}</h1>
        </div>
      </>
    );
}

export default UserDisplay